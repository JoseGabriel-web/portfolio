import CustomCursor from "@components/CustomCursor/CustomCursor";
import Nav from "@components/Nav/Nav";
import AppContext from "@context/app/AppContext";
import Loader from "@components/Loader/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useState, FC } from "react";
import { useRef } from "react";
import NavMenu from "@components/NavMenu/NavMenu";

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
  const containerRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isNavMenuOpened, setIsNavMenuOpened] = useState<boolean>(false);  

  return (
    <AnimatePresence>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <AppContext containerRef={containerRef}>
          <motion.main id="container" ref={containerRef}>
            <CustomCursor />
            <motion.header
              variants={headerVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#container"
            >
              <Nav setIsNavMenuOpened={setIsNavMenuOpened} />
            </motion.header>
            {children}
            <motion.div
              data-scroll
              data-scroll-sticky
              data-scroll-target="#container"
            >
              <NavMenu
                setIsNavMenuOpened={setIsNavMenuOpened}
                isNavMenuOpened={isNavMenuOpened}
              />
            </motion.div>
          </motion.main>
        </AppContext>
      )}
    </AnimatePresence>
  );
};

export default Layout;
