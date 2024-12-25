import React from "react";
import Experiences from "@/components/sections/Experiences";
import { AnimatePresence, motion } from "framer-motion";
import { slideInMotionVariants } from "@/libs/utils/ui";
import SlideIn from "../components/Animations/motions/SlideIn";

const ExperiencesPage = () => {
  return (
    <AnimatePresence>
      <SlideIn className="sm:hidden">
        <Experiences />
      </SlideIn>
    </AnimatePresence>
  );
};

export default ExperiencesPage;
