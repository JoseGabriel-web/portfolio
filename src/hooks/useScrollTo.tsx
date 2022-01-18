import React from "react";
import { useAppContext } from "@hooks/useAppContext";
import { isMobile } from "react-device-detect";

const useScrollTo = () => {
  const { smoothScroller } = useAppContext();

  const scrollTo = ({
    hash = null,
    delay = null,
    fixedHeight = null,
    offset = null,
  }: {
    hash: string | null;
    delay: number | null;
    fixedHeight: number | null;
    offset: number | null;
  }) => {
    const element: HTMLElement | null = hash
      ? document.querySelector(hash)
      : null;
    const navbar: HTMLElement | null = document.querySelector("#nav");

    const scroll = () => {
      if (isMobile) {
        if (fixedHeight) {
          window.scrollTo({
            top: fixedHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (hash) {
          location.hash = hash
        } else {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (element && smoothScroller && navbar) {
          smoothScroller.scrollIntoView(element, {
            offsetTop: offset || navbar.offsetHeight,
            alignToTop: true,
            onlyScrollIfNeeded: true,
          });
        } else if (smoothScroller && fixedHeight) {
          smoothScroller.scrollTo(fixedHeight);
        } else {
          smoothScroller?.scrollTo(smoothScroller.scrollTop);
        }
      }
    };

    if (delay) {
      const timeout = setTimeout(() => {
        scroll();
        clearTimeout(timeout);
      }, delay * 1000);
    } else {
      scroll();
    }
  };

  return scrollTo;
};

export default useScrollTo;
