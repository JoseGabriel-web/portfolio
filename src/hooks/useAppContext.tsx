import { SmoothScrollbarContext } from "@context/app/SmoothScrollbarProvider";
import { useContext } from "react";

export const useAppContext = () => {
  const smoothScroller = useContext(SmoothScrollbarContext);

  return { smoothScroller };
};

