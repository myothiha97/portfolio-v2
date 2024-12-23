import useModal from "@/libs/hooks/useModal";

const Modal = () => {
  const { content } = useModal();

  return (
    <dialog id="modal" className="modal">
      <div
        className="w-[clamp(350px,50vw,500px)] bg-[#F5F5F7] overflow-scroll aspect-[3/4] hide-scrollbar p-8 md:p-14 rounded-3xl mb-4"
        id="modal-content"
      >
        {content}
        <h3 className="font-bold text-lg">Hello!</h3>

        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
    </dialog>
  );
};

export default Modal;
