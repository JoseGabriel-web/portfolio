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
    >
      <div className="about-section-content-wrapper">
        <div className="about-section-text-wrapper">
          <h1 className="about-section-title">About me</h1>
          <h2 className="about-section-subtitle">
            i'm a self taught, developer.
          </h2>
          <div className="about-section-text-paragraphs-wrapper">
            <p className="about-section-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              atque voluptas ab incidunt nesciunt et voluptates tempora
              consequatur illum necessitatibus blanditiis odio, expedita ipsa?
              Itaque totam quae reiciendis labore enim.
            </p>
            <p className="about-section-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              atque voluptas ab incidunt nesciunt et voluptates tempora
              consequatur illum necessitatibus blanditiis odio, expedita ipsa?
              Itaque totam quae reiciendis labore enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
