import getScroller from "@helpers/getScroller";
import { MutableRefObject } from "react";
import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";

const useIsVisible = (elementRef: MutableRefObject<any>): boolean => {
  const [scrollerChange, setScrollerChange] = useState(0);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let scroller = getScroller();
    if (scroller) {
      scroller.addListener(({ offset }) => {
        setScrollerChange(offset.y);
      });
    }
  }, [scrollerChange]);

  useEffect(() => {
    const scroller = getScroller()
    if (scroller && elementRef) {      
      setIsVisible(scroller.isVisible(elementRef.current));      
    }
  }, [elementRef, scrollerChange]);

  return isVisible;
};

export default useIsVisible;
