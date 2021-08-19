import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 999, y: 999 });

  const onMouseMove = (e: MouseEvent) => {
    const { pageX: x, pageY: y } = e;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      <motion.svg height="10" width="10">
        <motion.circle cx="4" cy="4" r="3" stroke-width="0"></motion.circle>
      </motion.svg>
    </motion.div>
  );
};

export default CustomCursor;
