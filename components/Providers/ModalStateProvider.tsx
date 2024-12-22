import React, { useState } from "react";

type ModalState = {
  content: React.ReactNode | null;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
};

export const ModalStateContext = React.createContext<ModalState>({
  content: null,
  setContent: () => {},
});

type Props = {
  children: React.ReactNode;
};

const ModalStateProvider = ({ children }: Props) => {
  const [content, setContent] = useState<React.ReactNode>(null);
  return (
    <ModalStateContext.Provider value={{ content, setContent }}>
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateProvider;
