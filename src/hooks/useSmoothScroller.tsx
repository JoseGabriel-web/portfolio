import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
gsap.registerPlugin(ScrollTrigger);

const useSmoothScroller = () => {
  const container = document.querySelector("body");
  const [scroller, setScroller] = useState<Scrollbar | null>(null);

  useEffect(() => {
    if(isMobile) return
    if (container) {
      setTimeout(() => {
        let bodyScrollbar = Scrollbar.init(container, {
          damping: 0.04,
          thumbMinSize: 20,
          alwaysShowTracks: false,          
          delegateTo: document,
        });
        setScroller(bodyScrollbar);
        bodyScrollbar.setPosition(0, 0);

        ScrollTrigger.scrollerProxy("body", {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollbar.scrollTop = Number(value);
            }
            return bodyScrollbar?.scrollTop;
          },
        });
        bodyScrollbar.addListener(ScrollTrigger.update);
      });      
    }
  }, [container]);

  return { scroller };
};

export default useSmoothScroller;
