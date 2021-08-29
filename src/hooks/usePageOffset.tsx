import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";

const usePageOffset = () => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      let scroller = Scrollbar.get(body);
      if (scroller) {
        scroller.addListener(({ offset }) => {
          setTop(offset.y);
          setLeft(offset.x);
        });
      }
    }
  }, []);

  return { top, left };
};

export default usePageOffset;
