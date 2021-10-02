import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useIsVisible from "@hooks/useIsVisible";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIsVisible(sectionRef);
  const history = useHistory();

  useEffect(() => {
    if (isVisible) {
      history.push("/#about");
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      data-scroll
      data-scroll-section
      className="about-section"
      ref={sectionRef}
    ></section>
  );
};

export default AboutSection;
