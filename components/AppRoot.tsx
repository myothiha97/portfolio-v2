import React, { useContext, useEffect } from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";

import { motion } from "framer-motion";
import SlideIndexProvider, {
  SlideIndexContext,
} from "./Providers/SlideIndexProvider";
import ModalStateProvider from "./Providers/ModalStateProvider";
import Modal, { MobileModal } from "./Modal";
import MobileMenu from "./MobileMenu/index";
import { slideInMotionVariants } from "@/libs/utils/ui";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  children: React.ReactNode;
}

const BGs = [
  "coffe-cup.jpg",
  "work-bg.jpg",
  "black-coffee.jpg",
  "contact-bg.jpg",
];

const BackgroundImage = () => {
  const { slideIndex } = useContext(SlideIndexContext);

  return (
    <>
      {BGs.map((bg, i) => (
        <motion.div
          initial={{ opacity: 0.0 }}
          animate={{ opacity: i === slideIndex ? 0.4 : 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          className={cn(
            "bg-cover bg-center w-screen fixed h-screen top-0 transition-opacity duration-1000 z-[-1]"
          )}
          style={{
            backgroundImage: `url(/bgs/${bg})`,
          }}
        />
      ))}
    </>
  );
};

const AppRoot = ({ children }: Props) => {
  useEffect(() => {
    const body = document.body;
    const timer = setTimeout(() => {
      body.classList.remove("overflow-hidden");
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <ModalStateProvider>
      <MobileModal />
      <SlideIndexProvider>
        <MobileMenu />

        <motion.main
          initial={"slideOut"}
          whileInView={"slideIn"}
          variants={slideInMotionVariants}
          className={cn(
            rubik.className,
            "antialiased",
            "min-h-screen",
            "relative z-[1] pt-20 md:pt-28 lg:pt-44"
          )}
        >
          <BackgroundImage />
          {children}
        </motion.main>
      </SlideIndexProvider>
      <Modal />
    </ModalStateProvider>
  );
};

export default AppRoot;
