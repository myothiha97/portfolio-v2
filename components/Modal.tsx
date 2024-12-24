import useModal from "@/libs/hooks/useModal";
import { closeModal } from "@/libs/utils/ui";
import { AnimatePresence, motion } from "framer-motion";

const CloseIcon = () => {
  return (
    <button onClick={closeModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fffce1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};

const Modal = () => {
  const { content } = useModal();
  console.log({ content });

  return (
    <dialog id="modal" className="modal">
      <AnimatePresence>
        {content && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-[clamp(400px,50vw,600px)] relative bg-gray-900 overflow-scroll hide-scrollbar pt-5 pb-8 rounded-3xl mb-4"
            id="modal-content"
          >
            <div className="flex justify-end pr-5">
              <CloseIcon />
            </div>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
};

export default Modal;
