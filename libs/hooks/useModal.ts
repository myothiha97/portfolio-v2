import { ModalStateContext } from "@/components/Providers/ModalStateProvider";
import { useContext, useEffect } from "react";
import { removeModalElement, renderModalElement } from "../utils/ui";

export default function useModal() {
  const { content, setContent } = useContext(ModalStateContext);
  const openModal = ({ content }: { content: React.ReactNode }) => {
    setContent(content);
    renderModalElement();
  };

  const closeModal = () => {
    removeModalElement();
    setContent(null);
  };

  useEffect(() => {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    const modalContent = document.getElementById("modal-content");
    const closeModal = () => {
      if (content) {
        modal?.close();
        setContent(null);
      }
    };
    const onClickOutside = (e) => {
      if (!modalContent?.contains(e.target)) {
        closeModal();
      }
    };

    modal?.addEventListener("close", closeModal);
    modal?.addEventListener("click", onClickOutside);

    return () => {
      modal?.removeEventListener("close", closeModal);
      modal?.removeEventListener("click", onClickOutside);
    };
  }, [content]);
  return { content, setContent, openModal, closeModal };
}
