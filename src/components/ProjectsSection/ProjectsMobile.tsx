import { FC } from "react";

interface props {
  projects: {
    image: string;
    title: string;
    link: string;
  }[];
}

const ProjectsMobile: FC<props> = ({ projects }) => {
  return <div></div>;
};

export default ProjectsMobile;
