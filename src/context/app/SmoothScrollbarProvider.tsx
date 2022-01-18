import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useState, createContext, FC } from "react";
import { isMobile } from "react-device-detect";
import { Data2d } from 'smooth-scrollbar/interfaces';
gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollbarContext = createContext<Scrollbar | null>(null);

// Smooth Scrollbar Plugins.

class StopPlugin extends ScrollbarPlugin {
  static pluginName = "StopPlugin";

  static defaultOptions = {
    isStopped: false
  };

  transformDelta(delta: Data2d, _evt: Event): Data2d {
      return this.options.isStopped? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(StopPlugin);


// Provider
const SmoothScrollbarProvider: FC = ({ children }) => {
  const container = document.querySelector("body");
  const [scroller, setScroller] = useState<Scrollbar | null>(null);

  useEffect(() => {
    if (isMobile) return;
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

  return (
    <SmoothScrollbarContext.Provider value={scroller}>
      {children}
    </SmoothScrollbarContext.Provider>
  );
};

export default SmoothScrollbarProvider;
