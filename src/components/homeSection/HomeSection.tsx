import logo from "@assets/svg/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import Marquee from "@components/Marquee/Marquee";

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

const logoVariants = {
  enter: {
    y: 0,
    transition: {
      ease: easing,
      duration: 0.45,
      delay: 0.6,
    },
  },
  exit: {
    y: "-100%",
    transition: { ease: easing, duration: 0.55 },
  },
};

const HomeSection = () => {
  const [isMarqueePlaying, setIsMarqueePlaying] = useState(false);

  return (
    <motion.section data-scroll-section className="home-section">
      <motion.div className="home-section-content-wrapper">
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
            style={{ display: "flex" }}
          >
            {"JOSÉ _ GABRIEL".split("").map((letter) => (
              <motion.span
                data-scroll-speed={50}
                style={{ display: "block" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2, ease: easing },
                }}
                className="home-section-text-title"
              >
                {letter === "_" ? <span>&nbsp;&nbsp;&nbsp;</span> : letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            key="c"
            variants={itemVariants}
            onAnimationComplete={() => setIsMarqueePlaying(true)}
          >
            <p className="home-section-text-paragraph">
              Im a full stack developer, currently focused on expanding my
              knowdledge and skills, by creating clean & functional projects.
            </p>
          </motion.div>
        </motion.div>

        <Marquee
          title={"JOSE GABRIEL MERCEDES GERONIMO"}
          isPlaying={isMarqueePlaying}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
