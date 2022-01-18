import projects from "@assets/data/projects";
import { isMobile } from "react-device-detect";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

const ProjectsSection = () => {
  return (
    <div id="projects">
      <div className="projects-title-wrapper">
        <h1 className="projects-title">PROJECTS</h1>
      </div>
      {isMobile ? (
        <ProjectsMobile projects={projects} />
      ) : (
        <ProjectsDesktop projects={projects} />
      )}
    </div>
  );
};

export default ProjectsSection;
