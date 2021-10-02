import GithubSvg from "@assets/svg/GithubSvg";
import LinkedInSVG from "@assets/svg/LinkedInSVG";
import TelegramSVG from "@assets/svg/TelegramSVG";
import TwitterSVG from "@assets/svg/TwitterSVG";
import scrollIntoView from "@helpers/scrollIntoView";
import usePageOffset from "@hooks/usePageOffset";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router";
import SocialLink from "./SocialLink";

const easing = [0.455, 0.03, 0.515, 0.955];

const staggerContainer = {
  exit: {},
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemLeftVariants = {
  exit: {
    x: -200,
  },
  enter: {
    x: 0,
    transition: {
      ease: easing,
      duration: 0.75,
    },
  },
};
const itemRightVariants = {
  exit: {
    x: 200,
  },
  enter: {
    x: 0,
    transition: {
      ease: easing,
      duration: 0.75,
    },
  },
};

const FixedBottom = () => {
  const socialLinks = [
    {
      url: "https://github.com/JoseGabriel-web",
      icon: <GithubSvg />,
    },
    {
      url: "https://www.linkedin.com/in/jose-gabriel-3993071ab/",
      icon: <LinkedInSVG />,
    },
    {
      url: "https://www.linkedin.com/in/jose-gabriel-3993071ab/",
      icon: <TwitterSVG />,
    },
    {
      url: "https://www.instagram.com/josegabrielmer",
      icon: <TelegramSVG />,
    },
  ];

  const { top } = usePageOffset();
  const { hash } = useLocation();
  const [pathIndex, setPathIndex] = useState(0);
  const sections = ["home", "about"];

  const handleScrollPrev = () => {
    scrollIntoView("#" + sections[pathIndex - 1]);
    setPathIndex((prev) => prev - 1);
  };
  const handleScrollNext = () => {
    scrollIntoView("#" + sections[pathIndex + 1]);
    setPathIndex((prev) => prev + 1);
  };

  const setPathnameIndex = () => {
    let formatedHash = hash.replaceAll("#", "");
    let index = sections.indexOf(formatedHash === "" ? "home" : formatedHash);
    setPathIndex(index);
    console.log({ formatedHash, index });
  };

  useEffect(() => {
    setPathnameIndex();
  }, [hash]);

  useEffect(() => {
    setPathnameIndex();
  }, []);

  return (
    <motion.div className="fixed-bottom-wrapper" style={{ top: top + "px" }}>
      <motion.div
        className="socials"
        variants={staggerContainer}
        initial="exit"
        animate="enter"
        exit="exit"
        style={{ overflow: !isMobile ? "hidden" : "auto" }}
      >
        {socialLinks.map(({ url, icon }, index) => (
          <SocialLink
            url={url}
            icon={icon}
            variants={itemLeftVariants}
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        className="scroller"
        key="a"
        variants={itemRightVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.h2 className="scroller-label">
          <span
            onClick={handleScrollPrev}
            className="check-hover"
            style={{ pointerEvents: pathIndex === 0 ? "none" : "all" }}
          >
            prev -
          </span>
          scroll
          <span
            onClick={handleScrollNext}
            className="check-hover"
            style={{
              pointerEvents: pathIndex === sections.length - 1 ? "none" : "all",
            }}
          >
            - Next
          </span>
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default FixedBottom;
