import ProjectCards from "./ProjectCards";

type Props = {
  slideIndex: number;
};

const Projects = ({ slideIndex }: Props) => {
  return slideIndex === 2 ? <ProjectCards /> : null;
};

export default Projects;
