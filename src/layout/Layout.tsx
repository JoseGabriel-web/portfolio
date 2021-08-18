import Navigation from "./nav/Navigation";
import AppContext from "@context/app/AppContext";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useEffect, useState, FC, useRef } from "react";

const headerVariants = {
  enter: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 },
  },
  exit: {
    y: "-200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 },
  },
};

const Layout: FC = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(
    document.createElement("div"),
  );

  const update = () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    }
  };

  const cursorMove = (e: MouseEvent) => {
    if (cursorRef.current !== null) {
      cursorRef.current.style.display = "flex";
      cursorRef.current.style.top = e.pageY + "px";
      cursorRef.current.style.left = e.pageX + "px";
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  useEffect(() => {
    if (cursorRef.current) {
      window.addEventListener("mousemove", cursorMove);
    }
  }, [cursorRef]);

  return (
    <AnimatePresence>
      <AppContext>
        <motion.main id="container" data-scroll-container>
          <motion.header
            variants={headerVariants}
            initial="exit"
            animate={hidden ? "exit" : "enter"}
            exit="exit"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#container"            
          >
            <Navigation />
          </motion.header>

          <motion.div className="cursor" ref={cursorRef}>
            <motion.svg height="10" width="10">
              <motion.circle
                cx="4"
                cy="4"
                r="3"
                stroke-width="0"
              ></motion.circle>
            </motion.svg>
          </motion.div>

          {children}
        </motion.main>
      </AppContext>
    </AnimatePresence>
  );
};

export default Layout;
