import { isMobile } from "react-device-detect";
import getScroller from "./getScroller";
const scrollIntoView = (hash: string) => {
  let scroller = getScroller();
  let element: HTMLElement =
    document.querySelector(hash) || document.createElement("div");
  if (scroller && element && !isMobile) {
    scroller.scrollIntoView(element);
  } else {
    location.hash = hash
  }
};

export default scrollIntoView;
