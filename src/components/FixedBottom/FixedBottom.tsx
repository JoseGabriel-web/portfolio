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
import socialLinks from '@assets/data/socialLinks'

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
  

  const { top } = usePageOffset();
  const { hash } = useLocation();
  const [pathSelected, setPathSelected] = useState("");
  const sections = ["#home", "#about"];

  useEffect(() => {
    setPathSelected(hash)
  }, [hash])

  const handleScrollPrev = () => {
    const currentIndex = sections.indexOf(pathSelected)
    if(currentIndex === 0) return
    scrollIntoView(sections[currentIndex - 1])
  };

  const handleScrollNext = () => {
    const currentIndex = sections.indexOf(pathSelected)
    if(currentIndex === sections.length) return
    scrollIntoView(sections[currentIndex + 1])
  };

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
        {socialLinks.map(({ url, Icon }, index) => (
          <SocialLink
            url={url}
            icon={<Icon />}
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
          >
            prev -
          </span>
          scroll
          <span
            onClick={handleScrollNext}
            className="check-hover"
          >
            - next
          </span>
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default FixedBottom;
