import { motion } from "framer-motion";
import { FC, useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useIsVisible from "@hooks/useIsVisible";
import scrollIntoView from "@helpers/scrollIntoView";
import Marquee from "@components/Marquee/Marquee";
import Tilt from "react-parallax-tilt";
import { isMobile } from "react-device-detect";
import Canvas from "@components/Canvas/Canvas";

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
  const [isMarqueePlaying, setIsMarqueePlaying] = useState(false);
  const [direction, setDirection] = useState<"normal" | "reverse">("normal");

  const ref = useRef<HTMLElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);
  const history = useHistory();

  const handleScrollDown = () => {
    scrollIntoView("#about");
  };

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
    >
      <motion.div
        key="w"
        variants={staggerContainer}
        initial="exit"
        animate="enter"
        exit="exit"
        className="home-section-text-wrapper"
        ref={canvasContainerRef}
      >
        <Tilt tiltMaxAngleY={15} tiltMaxAngleX={15} tiltEnable={!isMobile}>
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
              knowdledge and skills, by creating clean looking & functional
              projects.
            </p>
          </motion.div>
        </Tilt>
      <Canvas containerRef={canvasContainerRef} />
      </motion.div>

      <div className="home-section-footer">
        <h2
          className="home-section-footer-label check-hover"
          onClick={handleScrollDown}
        >
          scroll down
        </h2>
      </div>
    </motion.section>
  );
};

export default HomeSection;
