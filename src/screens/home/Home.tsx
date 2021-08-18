import HomeSection from "@components/homeSection/HomeSection";
import VerticalIndicator from "@components/verticalIndicator/VerticalIndicator";
import { motion } from "framer-motion";

const HomeScreen = () => {
  return (
    <motion.div data-section className="home-screen">
      <HomeSection />
      <section data-scroll-section className="about-section"></section>
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
