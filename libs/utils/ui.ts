export const openModal = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  modal?.showModal();
};

export const closeModal = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  modal?.close();
};

export const slideInMotionVariants = {
  slideIn: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  slideOut: {
    y: 40,
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
