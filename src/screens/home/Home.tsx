import HomeSection from "@components/HomeSection/HomeSection";
import VerticalIndicator from "@components/VerticalIndicator/VerticalIndicator";
import { motion } from "framer-motion";

const HomeScreen = () => {
  return (
    <motion.div data-section className="home-screen">
      <HomeSection />
      <section data-scroll-section className="about-section" id="about-section"></section>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#container"
      >
        <VerticalIndicator />
      </motion.div>
    </motion.div>
  );
};

export default HomeScreen;
