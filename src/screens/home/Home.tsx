import AboutSection from "@components/AboutSection/AboutSection";
import Canvas from "@components/Canvas/Canvas";
import HomeSection from "@components/HomeSection/HomeSection";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";
import { motion } from "framer-motion";
import { useRef } from "react";

const HomeScreen = () => {
  const ref = useRef(null)

  return (
    <motion.div className="home-screen" ref={ref}>
      {/* <Canvas containerRef={ref} /> */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default HomeScreen;
