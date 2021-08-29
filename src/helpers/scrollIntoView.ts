import getScroller from "./getScroller";
const scrollIntoView = (hash: string) => {
  let scroller = getScroller();
  let element: HTMLElement =
    document.querySelector(hash) || document.createElement("div");
  if (scroller && element) {
    scroller.scrollIntoView(element);
  }
};

export default scrollIntoView;
