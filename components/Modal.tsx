import useModal from "@/libs/hooks/useModal";

const Modal = () => {
  const { content } = useModal();

  return (
    <dialog id="modal" className="modal">
      <div className="modal-box" id="modal-content">
        {content}
        <h3 className="font-bold text-lg">Hello!</h3>

        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
    </dialog>
  );
};

export default Modal;
