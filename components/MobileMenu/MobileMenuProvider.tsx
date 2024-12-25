import React, { useState } from "react";

type ContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenuContext = React.createContext<ContextType>({
  open: false,
  setOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

const MobileMenuProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <MobileMenuContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
