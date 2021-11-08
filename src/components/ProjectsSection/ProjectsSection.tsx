
import projects from "@assets/data/projects";
import { isMobile } from "react-device-detect";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

const ProjectsSection = () => {  
  return isMobile ? (
    <ProjectsMobile projects={projects}/>
  ) : (
    <ProjectsDesktop projects={projects} />
  );
};

export default ProjectsSection;
