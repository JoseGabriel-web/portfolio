import CustomCursor from "@components/CustomCursor/CustomCursor";
import Nav from "@components/Nav/Nav";
import AppContextProvider from "@context/app/AppContextProvider";
import Loader from "@components/Loader/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useState, FC, useRef } from "react";
import NavMenu from "@components/NavMenu/NavMenu";
import useSmoothScroller from "@hooks/useSmoothScroller";


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
  const containerRef = useRef<HTMLDivElement>(document.createElement("div"));
  const [loading, setLoading] = useState<boolean>(true);
  const [isNavMenuOpened, setIsNavMenuOpened] = useState<boolean>(false);    
  useSmoothScroller()
  
  
  
  // Runs after loader animation
  function handleStart() {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <AppContextProvider>
      <AnimatePresence>
        {loading ? (
          <Loader handleStart={handleStart} />
          ) : (
            <motion.main ref={containerRef}>
            <CustomCursor />
            <motion.header
              variants={headerVariants}
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <Nav setIsNavMenuOpened={setIsNavMenuOpened} />
            </motion.header>
            {children}
            <motion.div>
              <NavMenu
                setIsNavMenuOpened={setIsNavMenuOpened}
                isNavMenuOpened={isNavMenuOpened}
              />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </AppContextProvider>
  );
};

export default Layout;
