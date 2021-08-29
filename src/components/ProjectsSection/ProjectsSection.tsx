import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import projects from "@assets/data/projects";
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const panelsContainer = useRef<HTMLDivElement | null>(
    document.createElement("div"),
  );
  const totalProjects = projects.length;
  useEffect(() => {
    setTimeout(() => {
      let panels = gsap.utils.toArray(".project-wrapper");      
      gsap.to(panels, {
        xPercent: -100 * (totalProjects - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (totalProjects - 1),
          pinType: "transform",
          anticipatePin: 1
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className="projects-wrapper" id="projects" ref={panelsContainer}>
      <div className="projects">
        {projects.map(({ src, title }) => (
          <Item src={src} title={title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

const Item = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="project-wrapper">
      <img src={src} alt={title} />
    </div>
  );
};
