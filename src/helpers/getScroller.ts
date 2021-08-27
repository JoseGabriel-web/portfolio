import Scrollbar from "smooth-scrollbar";
const getScroller = () => {
  const body = document.querySelector("body");
  if (body) {
    let scroller = Scrollbar.get(body);
    if (scroller) {
      return scroller;
    }
  }
};

export default getScroller;
