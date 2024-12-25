import React, { useContext } from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";

import { motion } from "framer-motion";
import SlideIndexProvider, {
  SlideIndexContext,
} from "./Providers/SlideIndexProvider";
import ModalStateProvider from "./Providers/ModalStateProvider";
import Modal from "./Modal";
import Contact from "./sections/Contact";
import { Copyright } from "lucide-react";
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

type BackgroundImageProps = {
  index?: number;
};

const BackgroundImage = ({ index = 0 }: BackgroundImageProps) => {
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
            // i === slideIndex ? "opacity-40 visible" : "opacity-0 invisible"
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
  return (
    <ModalStateProvider>
      <SlideIndexProvider>
        <MobileMenu />
        <motion.main
          initial={"slideOut"}
          whileInView={"slideIn"}
          // transition={{
          //   delay: 0.3,
          //   duration: 0.8,
          //   ease: "easeInOut",
          // }}
          variants={slideInMotionVariants}
          className={cn(
            rubik.className,
            "antialiased",
            "w-full",
            "h-screen overflow-hidden hide-scrollbar relative z-[1] sm:pt-0 pt-20"
          )}
        >
          <BackgroundImage />
          {children}
        </motion.main>
      </SlideIndexProvider>
      <Modal />
      <Contact />
    </ModalStateProvider>
  );
};

export default AppRoot;
