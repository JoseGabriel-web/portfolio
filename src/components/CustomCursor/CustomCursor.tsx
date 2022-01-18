import usePageOffset from "@hooks/usePageOffset";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { isBrowser } from "react-device-detect";

const CustomCursor = ({ updateDependencies }: {updateDependencies: Array<any>}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offsetTop, setOffsetTop] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { top } = usePageOffset();
  const onMouseMove = (e: MouseEvent) => {
    const { pageX: x, pageY: y } = e;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.querySelectorAll(".check-hover").forEach((el) => {
      if (el) {
        el.addEventListener("mouseover", () => {
          setIsHovering(true);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
        });
      }
    });
  }, [...updateDependencies]);

  useEffect(() => {
    setOffsetTop(Number(top));
  }, [top]);

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
          className={`cursor ${isHovering && "isHovering"}`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y + offsetTop}px`,
          }}
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
