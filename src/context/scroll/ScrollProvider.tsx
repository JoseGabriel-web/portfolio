import { useState, FC, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const ScrollProvider: FC = ({ children }) => {

  const [container, setContainer] = useState<Element | null>()

  useEffect(() => {
    setContainer(document.querySelector("[data-scroll-container]"));
  },[])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "vertical",
        multiplier: 0.2,
      }}
      watch={
        [container]
      }
      containerRef={document.querySelector("[data-scroll-container]")}
    >
      {children}
    </LocomotiveScrollProvider>
  );
};

export default ScrollProvider;
