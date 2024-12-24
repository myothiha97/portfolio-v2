import React, { useState } from "react";

type ModalState = {
  content: React.ReactNode | null;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalStateContext = React.createContext<ModalState>({
  setDrawer: () => {},
  drawer: false,
  content: null,
  setContent: () => {},
});

type Props = {
  children: React.ReactNode;
};

const ModalStateProvider = ({ children }: Props) => {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [drawer, setDrawer] = useState(false);
  return (
    <ModalStateContext.Provider
      value={{ content, setContent, drawer, setDrawer }}
    >
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateProvider;
