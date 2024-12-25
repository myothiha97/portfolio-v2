import React, { useContext } from "react";
import MobileMenuProvider, { MobileMenuContext } from "./MobileMenuProvider";
import { Menu } from "lucide-react";
import MobileMenuContent from "./MobileMenuContent";

const MobileMenuTrigger = (params) => {
  const { open, setOpen } = useContext(MobileMenuContext);
  const onClickMenu = () => {
    setOpen(true);
  };
  return (
    <nav
      className="bg-primary-color text-black w-screen py-3 items-center fixed top-0 z-40 cursor-pointer sm:hidden"
      onClick={onClickMenu}
    >
      <Menu className="absolute left-0 top-1/2 transform -translate-y-1/2"></Menu>
      <p className="text-lg text-center">Menu</p>
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <MobileMenuProvider>
      <MobileMenuTrigger />
      <MobileMenuContent />
    </MobileMenuProvider>
  );
};

export default MobileMenu;
