import SlideIn from "@/components/Animations/motions/SlideIn";
import { AnimatePresence } from "framer-motion";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <AnimatePresence>
      <SlideIn className="sm:hidden sm:px-0 px-5 pt-10 sm:pt-0">
        <Projects />
      </SlideIn>
    </AnimatePresence>
  );
}
