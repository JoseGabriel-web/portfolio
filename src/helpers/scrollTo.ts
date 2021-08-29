import getScroller from "./getScroller";

const scrollTo = (x: number, y: number, easing?: (n: number) => number) => {
  const scroller = getScroller();
  if (scroller) {
    scroller.scrollTo(x, y, 500, {
      easing: easing,
    });
  }
};

export default scrollTo;
