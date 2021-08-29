import AboutSection from "@components/AboutSection/AboutSection";
import HomeSection from "@components/HomeSection/HomeSection";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";
import { motion } from "framer-motion";

const HomeScreen = () => {
  return (
    <motion.div className="home-screen">
      <HomeSection />
      <AboutSection />
    </motion.div>
  );
};

export default HomeScreen;
