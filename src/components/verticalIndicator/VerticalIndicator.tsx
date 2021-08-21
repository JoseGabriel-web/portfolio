import { motion } from "framer-motion";
import { useState } from "react";
import { FC } from "react";
import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const ref = useRef(null);
  const [label, setLabel] = useState(location.hash);

  useEffect(() => {
    console.log(location.hash);
    if (!location.hash) setLabel("home");
    else {
      setLabel(location.hash.replace("#", ""));
    }
  }, [location.hash]);

  return (
    <motion.div
      variants={indicatorVariants}
      key={label}
      initial="exit"
      animate="enter"
      exit="exit"
      className="vertical-indicator-wrapper"
      ref={ref}
    >
      <small className="vertical-indicator-text">{label}</small>
    </motion.div>
  );
};

export default VerticalIndicator;
