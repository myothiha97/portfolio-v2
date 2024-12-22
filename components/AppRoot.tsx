import React, { useContext } from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";

import { motion } from "framer-motion";
import SlideIndexProvider, {
  SlideIndexContext,
} from "./Providers/SlideIndexProvider";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  children: React.ReactNode;
}

const BGs = [
  "coffee-bg-1.jpeg",
  "work-bg.jpg",
  "projects.jpg",
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
    <SlideIndexProvider>
      <motion.main
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          rubik.className,
          "antialiased",
          "w-full",
          "h-screen overflow-hidden hide-scrollbar relative z-[1]"
        )}
      >
        <BackgroundImage />
        {children}
      </motion.main>
    </SlideIndexProvider>
  );
};

export default AppRoot;
