import { motion } from "framer-motion";
import { FC } from "react";
import { useEffect, useRef } from "react";

const indicatorVariants = {
  enter: {
    y: 0,
    rotate: 180,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55, delay: 1 },
  },
  exit: {
    y: "200%",
    rotate: 180,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 },
  },
};

const VerticalIndicator: FC = () => {
  const ref = useRef(null);

  return (
    <motion.div
      variants={indicatorVariants}
      key="asd"
      initial="exit"
      animate="enter"
      exit="exit"
      className="vertical-indicator-wrapper"
      ref={ref}
    >
      <h3 className="vertical-indicator-text">home</h3>
    </motion.div>
  );
};

export default VerticalIndicator;
