import { isMobile } from "react-device-detect";
import getScroller from "./getScroller";

const scrollTo = (x: number, y: number, easing?: (n: number) => number) => {
  const scroller = getScroller();
  if (scroller && !isMobile) {
    scroller.scrollTo(x, y, 500, {
      easing: easing,
    });
  } else {
    
  }
};

export default scrollTo;
