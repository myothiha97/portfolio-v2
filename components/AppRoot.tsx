import React, { useContext } from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";

import { motion } from "framer-motion";
import SlideIndexProvider, {
  SlideIndexContext,
} from "./Providers/SlideIndexProvider";
import ModalStateProvider from "./Providers/ModalStateProvider";
import Modal, { MobileModal } from "./Modal";
import Contact from "./sections/Contact";
import MobileMenu from "./MobileMenu/index";
import { slideInMotionVariants } from "@/libs/utils/ui";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const bgIndex = router.query?.bgIndex;
  const bgIndexFromURL = bgIndex ? parseInt(bgIndex as string) : undefined;
  const currentIndex = bgIndexFromURL || slideIndex;

  return (
    <>
      {BGs.map((bg, i) => (
        <motion.div
          initial={{ opacity: 0.0 }}
          animate={{ opacity: i === currentIndex ? 0.4 : 0 }}
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
            "w-full",
            "h-screen overflow-scroll sm:overflow-hidden hide-scrollbar relative z-[1] sm:pt-0 pt-16"
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
