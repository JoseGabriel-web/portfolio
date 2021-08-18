import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
      delay: 0.5,
    },
  },
  exit: {
    y: "500%",
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
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

const HomeSection = () => {
  return (
    <motion.section data-scroll-section className="home-section">
      <motion.div
        key="w"
        variants={staggerContainer}
        initial="exit"
        animate="enter"
        exit="exit"
        className="home-section-text-wrapper"
      >
        <motion.div key="a" variants={itemVariants}>
          <h3 className="home-section-text-subtitle">HEY, MY NAME IS</h3>
        </motion.div>
        <motion.div key="b" variants={itemVariants}>
          <h1 className="home-section-text-title">JOSÉ GABRIEL.</h1>
        </motion.div>

        <motion.div key="c" variants={itemVariants}>
          <p className="home-section-text-paragraph">
            Im a full stack developer, currently focused on expanding my
            knowdledge and skills, by creating clean & functional projects.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
