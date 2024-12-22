import React from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";
import { AuroraBackground } from "./ui/aurora-background";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import AuroraBg from "./backgrounds/AuroraBg";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  children: React.ReactNode;
}

const AppRoot = ({ children }: Props) => {
  return (
    <>
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
          "h-screen overflow-hidden hide-scrollbar"
        )}
      >
        {children}
      </motion.main>
    </>
  );
};

export default AppRoot;
