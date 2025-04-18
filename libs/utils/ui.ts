export const renderModalElement = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  modal?.showModal();
};

export const removeModalElement = () => {
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

export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
