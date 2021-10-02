import { FC, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import useIsVisible from "@hooks/useIsVisible";

const easing = [0.455, 0.03, 0.515, 0.955];

const itemVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easing,
      duration: 0.75,
      delay: 0.5,
    },
  },
  exit: {
    y: "500%",
    opacity: 0,
    transition: { ease: easing, duration: 0.85 },
  },
};

const staggerContainer = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {},
};

const HomeSection: FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIsVisible(ref);
  const history = useHistory();

  useEffect(() => {
    if (isVisible) {
      history.push("/home");
    }
  }, [isVisible]);

  return (
    <motion.section
      ref={ref}
      key={"asdawd22"}
      data-scroll-section
      className="home-section"
      id="home"
    >
      <motion.div
        key="w"
        variants={staggerContainer}
        initial="exit"
        animate="enter"
        exit="exit"
        className="home-section-text-wrapper"
      >
        <motion.div key="a" variants={itemVariants}>
          <h3 className="home-section-text-subtitle">HEY, MY NAME IS</h3>
        </motion.div>
        <motion.div
          key="b"
          variants={itemVariants}
          className="home-section-text-title"
        >
          <span>JOSÉ</span> GABRIEL
        </motion.div>
        {/* <motion.div
          key="b"
          variants={itemVariants}
          className="home-section-text-title"
        >
          MERCEDES <span>GERONIMO</span>
        </motion.div> */}

        <motion.div key="c" variants={itemVariants}>
          <p className="home-section-text-paragraph">
            Im a full stack developer, currently focused on expanding my
            knowdledge and skills, by creating functional & clean looking
            projects.
          </p>
        </motion.div>

        <motion.a
          key="d"
          variants={itemVariants}
          className="home-section-hire-me-btn check-hover"
          href="mailto:chillelimon1111@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          hire me
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
