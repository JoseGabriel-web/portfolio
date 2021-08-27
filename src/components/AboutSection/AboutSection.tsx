import VerticalIndicator from "@components/VerticalIndicator/VerticalIndicator";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {});
  const isVisible = !!entry?.isIntersecting;  

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
      <VerticalIndicator label="ABOUT" />
    </section>
  );
};

export default AboutSection;
