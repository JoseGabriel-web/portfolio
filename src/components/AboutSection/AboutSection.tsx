import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useIsVisible from "@hooks/useIsVisible";
import socialLinks from "@assets/data/socialLinks";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  // const isVisible = useIsVisible(sectionRef);
  // const history = useHistory();

  // useEffect(() => {
  //   if (isVisible) {
  //     history.push("/#about");
  //   }
  // }, [isVisible]);

  return (
    <section
      id="about"
      data-scroll
      data-scroll-section
      className="about-section"
      ref={sectionRef}
    >
      <div className="about-section-text-wrapper">
        <div className="about-section-text-title-wrapper">
          <h2 className="about-section-text-title">About me</h2>
        </div>
        <div className="about-section-text-social-links-wrapper">
          {socialLinks.map(({ url, label }, index) => (
            <Link
              key={index}
              to={{
                pathname: url,
              }}
              target="_blank"
              className="check-hover about-social-link text-small"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="about-section-text-paragraph-wrapper">
          <p>
            Lorem ipsum dolor sit, amet conse ctetur adipisicing elit. A magnam
            tenetur odit, ea illo minus? Eos numquam ad placeat vero nesciunt
            labore eius fugit officia, eligendi dolorem quod aut exercitationem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
