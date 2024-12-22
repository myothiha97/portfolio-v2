import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AuroraBg = ({ className, children }: Props) => {
  return (
    <AuroraBackground className="bg-black text-primary-color">
      <motion.main
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "antialiased",
          "w-full",
          "h-screen overflow-hidden hide-scrollbar",
          className
        )}
      >
        {children}
      </motion.main>
    </AuroraBackground>
  );
};

export default AuroraBg;
