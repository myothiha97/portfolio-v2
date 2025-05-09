import React, { useContext } from "react";
import MobileMenuProvider, { MobileMenuContext } from "./MobileMenuProvider";
import { Menu } from "lucide-react";
import MobileMenuContent from "./MobileMenuContent";
import { useRouter } from "next/router";

const MobileMenuTrigger = (params) => {
  const { open, setOpen } = useContext(MobileMenuContext);
  const onClickMenu = () => {
    setOpen(true);
  };
  const router = useRouter();
  const path = router.pathname;

  return (
    <nav className="bg-transparent text-black flex justify-end pr-5 w-screen py-3 items-center fixed top-0 z-40 cursor-pointer lg:hidden">
      <button onClick={onClickMenu}>
        <Menu
          className="cursor-pointer  text-primary-color"
          width={30}
          height={30}
        ></Menu>
      </button>
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
