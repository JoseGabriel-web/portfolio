import { MutableRefObject, ReactChild } from "react";
import { useState, FC, useEffect } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";

interface props {
  containerRef: MutableRefObject<any>;
}

const ScrollProvider: FC<props> = ({ containerRef, children }) => {
  const { pathname } = useLocation();
  const { scroll, isReady } = useLocomotiveScroll();

  useEffect(() => {
    if(scroll) {
      scroll.scrollTo(pathname);
    }
  }, [pathname]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "vertical",
        gestureDirection: "vertical",
        multiplier: 0.2,
        lerp: 0.1,
        getDirection: true,
        getSpeed: true,
        reloadOnContextChange: true,
        repeat: true,
        isMobile: true
      }}
      watch={[containerRef.current, pathname]}
      location={pathname}
      onLocationChange={() => console.log("location change")}
      containerRef={containerRef}
    >
      {children}
    </LocomotiveScrollProvider>
  );
};

export default ScrollProvider;
