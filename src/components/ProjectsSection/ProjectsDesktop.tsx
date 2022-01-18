import { FC, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Arrow from "@assets/svg/Arrow";
import { Link } from "react-router-dom";
import GithubSvg from "@assets/svg/GithubSvg";
import { v4 as uuid } from "uuid";
gsap.registerPlugin(ScrollTrigger);

interface props {
  projects: {
    image: string;
    title: string;
    link: string;
    repository: string;
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
    <div className="projects-desktop-wrapper" ref={panelsContainer}>
      <div
        className="projects-desktop"
        style={{ width: `calc(100% * ${projects.length})` }}
      >
        {projects.map(({ image, title, link, repository }) => (
          <Item
            key={uuid()}
            image={image}
            link={link}
            title={title}
            repository={repository}
          />
        ))}
      </div>
    </div>
  );
};

const Item = ({
  image,
  title,
  link,
  repository,
}: {
  image: string;
  title: string;
  link: string;
  repository: string;
}) => {
  return (
    <div className="project-desktop-wrapper" >
      <div className="project-desktop-img-wrapper">
        <img className="project-desktop-img" src={image} alt={title} />
        <div className="project-desktop-circle" />
        <Link
          to={{ pathname: repository }}
          target="_blank"
          className="project-desktop-github check-hover"
        >
          <GithubSvg size={50} color="white" />
        </Link>
        <Link
          to={{ pathname: link }}
          target="_blank"
          className="project-desktop-title-wrapper check-hover"
        >
          <h1>
            {title} <Arrow />
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsDesktop;
