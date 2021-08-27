import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";

const usePageOffset = () => {
  const [top, setTop] = useState<string | null>(null);
  const [left, setLeft] = useState<string | null>(null);
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      let scroller = Scrollbar.get(body);
      console.log({ scroller });
      if (scroller) {
        scroller.addListener(({ offset }) => {
          setTop(offset.y + "px");
          setLeft(offset.x + "px");
        });
      }
    }
  }, []);

  return { top, left };
};

export default usePageOffset;
