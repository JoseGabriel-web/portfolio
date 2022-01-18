import CloseSVG from "@assets/svg/CloseSVG";
import Logo from "@components/Logo/Logo";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import sections from "@assets/data/links";
import usePageOffset from "@hooks/usePageOffset";
import useScrollTo from "@hooks/useScrollTo";
import { useAppContext } from "@hooks/useAppContext";
import { v4 as uuid } from "uuid";

interface props {
  setIsNavMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isNavMenuOpened: boolean;
}

const animateDuration = 0.5;
const initialAndExitPosition = "100%";
const initialAndExitDuration = 0.85;
const easing = [0.645, 0.045, 0.355, 1];

const itemVariant = {
  initial: {
    x: initialAndExitPosition,
    transition: { ease: easing, duration: animateDuration },
  },
  enter: {
    x: 0,
    skew: 0,
    transition: {
      ease: easing,
      duration: animateDuration,
    },
  },
  exit: {
    x: initialAndExitPosition,
    transition: {
      ease: easing,
      duration: animateDuration,
      delay: animateDuration,
    },
  },
};

const itemVariantMain = {
  initial: {
    x: initialAndExitPosition,
    transition: { ease: easing, duration: animateDuration },
  },
  enter: {
    x: 0,
    skew: 0,
    transition: {
      ease: easing,
      duration: animateDuration,
      delay: animateDuration,
    },
  },
  exit: {
    x: initialAndExitPosition,
    transition: { ease: easing, duration: animateDuration },
  },
};

const linksVariants = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      ease: easing,
      duration: 2,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easing,
      duration: 1,
      delay: 0.3,
    },
  },
  exit: {
    transition: { ease: easing, duration: 0.4 },
  },
};

const NavMenu: FC<props> = ({ setIsNavMenuOpened, isNavMenuOpened }) => {
  const scrollTo = useScrollTo();
  const { top } = usePageOffset();
  const { smoothScroller } = useAppContext();

  const handleCloseNavMenu = () => {
    setIsNavMenuOpened(false);
  };
  const history = useHistory();

  const handleLink = () => {
    setIsNavMenuOpened(false);
  };

  useEffect(() => {
    if (smoothScroller) {
      smoothScroller.updatePluginOptions("StopPlugin", {
        isStopped: isNavMenuOpened,
      });
    }
  }, [isNavMenuOpened]);

  return (
    <AnimatePresence>
      {isNavMenuOpened && (
        <motion.div
          key={uuid()}
          variants={itemVariant}
          className="nav-menu-wrapper"
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ top: top + "px" }}
        >
          <motion.div
            key={uuid()}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={itemVariantMain}
            className="nav-menu"
          >
            <motion.div className="nav-menu-header">
              <motion.div className="nav-menu-header-logo-wrapper">
                <Logo onClick={handleLink} />
              </motion.div>
              <motion.div className="nav-menu-header-close-btn-wrapper">
                <CloseSVG onClick={handleCloseNavMenu} size={40} />
              </motion.div>
            </motion.div>

            <motion.div className="nav-menu-content">
              <motion.div className="nav-menu-links-wrapper">
                <AnimatePresence key={isNavMenuOpened + ""}>
                  <h1>Menu</h1>
                  {sections.map(({ hash, path, label }, index) => (
                    <motion.div className="nav-menu-link" key={uuid()}>
                      <motion.div
                        whileHover={{
                          y: 3,
                          skewX: -5,
                          transition: { duration: 0.3 },
                        }}
                        variants={linksVariants}
                        onClick={(e) => handleLink()}
                        className="check-hover"
                      >
                        <motion.span>00{index + 1}</motion.span>
                        <motion.h2
                          onClick={() =>
                            scrollTo({
                              hash,
                              delay: animateDuration * 3,
                              fixedHeight: 0,
                              offset: null,
                            })
                          }
                        >
                          {label}
                        </motion.h2>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
