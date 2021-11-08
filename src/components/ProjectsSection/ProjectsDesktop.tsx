import { FC, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Arrow from "@assets/svg/Arrow";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

interface props {
  projects: {
    image: string;
    title: string;
    link: string;
  }[];
}

const ProjectsDesktop: FC<props> = ({ projects }) => {
  const panelsContainer = useRef<HTMLDivElement | null>(
    document.createElement("div"),
  );
  const totalProjects = projects.length;

  useEffect(() => {
    setTimeout(() => {
      let panels = gsap.utils.toArray(".project-desktop-wrapper");
      gsap.to(panels, {
        xPercent: -100 * (totalProjects - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (totalProjects - 1),
          pinType: "transform",
          anticipatePin: 1,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div
      className="projects-desktop-wrapper"
      id="projects"
      ref={panelsContainer}
    >
      <div className="projects-desktop">
        {projects.map(({ image, title, link }) => (
          <Item image={image} link={link} title={title} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ image, title, link }: { image: string; title: string; link: string }) => {
  return (
    <div className="project-desktop-wrapper">
      <div className="project-desktop-img-wrapper">
        <img className="project-desktop-img" src={image} alt={title} />
        <div className="project-desktop-circle" />
        <Link to={{ pathname: link }} target="_blank" className="project-desktop-title-wrapper check-hover">
            <h1>{title} <Arrow /></h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsDesktop;
