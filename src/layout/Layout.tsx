import CustomCursor from "@components/CustomCursor/CustomCursor";
import Navigation from "@components/Nav/Nav";
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

  const update = () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });


  return (
    <AnimatePresence>
      <AppContext>
        <motion.main id="container" data-scroll-container>
          <CustomCursor />
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


          {children}
        </motion.main>
      </AppContext>
    </AnimatePresence>
  );
};

export default Layout;
