import { useCustomCursor } from "@context/customCursor/CustomCursorProvider";
import usePageOffset from "@hooks/usePageOffset";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { isBrowser } from "react-device-detect";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 999, y: 999 });
  const [offsetTop, setOffsetTop] = useState(0)
  const { isHovered, setIsHovered } = useCustomCursor();
  const { top } = usePageOffset()
  const onMouseMove = (e: MouseEvent) => {
    const { pageX: x, pageY: y } = e;    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if(typeof top === "string") {
      setOffsetTop(Number(top.split("px")[0]))
    }
  },[top])

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);    
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {isBrowser && (
        <motion.div
          className={`cursor ${isHovered && "isHovering"}`}
          style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y + offsetTop}px` }}
        >
          <motion.svg height="10" width="10">
            <motion.circle cx="4" cy="4" r="3" stroke-width="0"></motion.circle>
          </motion.svg>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
