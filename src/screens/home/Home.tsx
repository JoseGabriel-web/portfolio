import AboutSection from "@components/AboutSection/AboutSection";
import HomeSection from "@components/HomeSection/HomeSection";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";
import VerticalIndicator from "@components/VerticalIndicator/VerticalIndicator";
import { motion } from "framer-motion";

const HomeScreen = () => {  

  return (
    <motion.div className="home-screen">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default HomeScreen;
