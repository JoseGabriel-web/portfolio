import CloseSVG from "@assets/svg/CloseSVG";
import Logo from "@components/Logo/Logo";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import sections from "@assets/data/links";

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
    // skew: 5,
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
    // skew: -5,
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
    // skew: 5,
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
    // skew: -5,
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
  const handleCloseNavMenu = () => {
    setIsNavMenuOpened(false);
  };
  const history = useHistory();

  const handleLink = () => {
    setIsNavMenuOpened(false);
  };

  return (
    <AnimatePresence>
      {isNavMenuOpened && (
        <motion.div
          key={isNavMenuOpened + ""}
          variants={itemVariant}
          className="nav-menu-wrapper"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div
            key={isNavMenuOpened + ""}
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
                    <motion.div
                      className="nav-menu-link"
                      key={isNavMenuOpened + ""}
                    >
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
                        <motion.h2>{label}</motion.h2>
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
