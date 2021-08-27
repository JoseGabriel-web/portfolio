import usePageOffset from "@hooks/usePageOffset";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { useEffect, useRef } from "react";
import useIsVisible from '@hooks/useIsVisible'

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

const VerticalIndicator: FC<{ label: string }> = ({ label }) => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref)

  useEffect(() => console.log({isVisible}),[isVisible])

  return (
    <motion.div
      variants={indicatorVariants}
      key={label}
      initial="exit"
      animate={isVisible? "enter" : "exit"}
      exit="exit"
      className="vertical-indicator-wrapper"
      ref={ref}
    >
      <small className="vertical-indicator-text">{label}</small>
    </motion.div>
  );
};

export default VerticalIndicator;
