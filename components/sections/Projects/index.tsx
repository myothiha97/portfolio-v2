import { useContext } from "react";
import ProjectCards from "./ProjectCards";
import { SlideIndexContext } from "@/components/Providers/SlideIndexProvider";

type Props = {
  slideIndex: number;
};

const Projects = ({ slideIndex }: Props) => {
  return slideIndex === 2 ? <ProjectCards /> : null;
};

export default Projects;
