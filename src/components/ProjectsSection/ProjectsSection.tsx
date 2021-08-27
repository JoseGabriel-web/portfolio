import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
  },
]

const ProjectsSection = () => {
  const panelsContainer = useRef<HTMLDivElement | null>(
    document.createElement("div"),
  );
  const totalPanels = images.length;
  useEffect(() => {
    setTimeout(() => {
      let panels = gsap.utils.toArray(".item-wrapper");
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (totalPanels - 1),
          pinType: "transform",
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className="gallery-wrapper" id="projects" ref={panelsContainer}>
      <div className="gallery">
        {images.map(({ src, title }) => (
          <Item src={src} title={title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

const Item = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="item-wrapper">
      {/* <div className="item"> */}
      <img src={src} alt={title} />
      {/* </div> */}
    </div>
  );
};
