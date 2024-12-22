export const openModal = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  modal?.showModal();
};

export const closeModal = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  modal?.close();
};
