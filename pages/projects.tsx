import SlideIn from "@/components/Animations/motions/SlideIn";
import { AnimatePresence } from "framer-motion";
import ProjectCards from "@/components/sections/Projects/ProjectCards";

export default function ProjectsPage() {
  return (
    <AnimatePresence>
      <SlideIn className="sm:hidden sm:px-0 px-5 sm:pt-0">
        <ProjectCards />
      </SlideIn>
    </AnimatePresence>
  );
}
