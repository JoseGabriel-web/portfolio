import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const logoCaracters = ["J", "G", "M", "G"];
const initialDuration = 0.5;
const animateDuration = 0.5;
const exitDuration = 0.6;
const staggerDelay = 0.3;
const easing = [0.645, 0.045, 0.355, 1];

const getLogoAnimationDuration = () => {
  let duration: number = 0;

  logoCaracters.forEach(() => {
    duration = initialDuration + animateDuration + exitDuration + staggerDelay;
  });

  return duration;
};

const logoAnimationDuration = getLogoAnimationDuration();

const containerVariants = {
  initial: {},
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: staggerDelay,
    },
  },
  exit: {},
};

const itemVariants = {
  initial: {
    y: 200,
    opacity: 0,
    transition: {
      ease: easing,
      duration: initialDuration,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easing,
      duration: animateDuration,
    },
  },
  exit: {
    transition: { ease: easing, duration: exitDuration },
  },
};

const progressBarVariants = {
  initial: {
    width: 0,
  },
  enter: {
    width: "100%",
    transition: {
      ease: easing,
      duration: logoAnimationDuration,
    },
  },
  exit: {},
};

const Loader: FC<props> = ({ setLoading }) => {
  const closeLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <motion.div
      className="loader"
      variants={containerVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div className="loader-logo">
        {logoCaracters.map((caracter) => (
          <motion.span variants={itemVariants}>{caracter}</motion.span>
        ))}
      </motion.div>
      <motion.div className="loader-progress-bar">
        <motion.div
          className="loader-progress-bar-bar"
          onAnimationComplete={closeLoader}
          variants={progressBarVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
