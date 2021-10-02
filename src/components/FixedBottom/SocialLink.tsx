import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

interface props {
    variants: Variants;
    icon: JSX.Element;
    url: string; 
}

const SocialLink: FC<props> = ({ variants, icon, url }) => {
  return (
    <motion.div variants={!isMobile ? variants : {}}>
      <Link
        to={{
          pathname: url,
        }}
        target="_blank"
        className="check-hover"
      >
        {icon}
      </Link>
    </motion.div>
  );
};

export default SocialLink;
