import { FC, MutableRefObject } from "react";
import ScrollProvider from "@context/scroll/ScrollProvider";

const AppContext: FC<{ containerRef: MutableRefObject<any> }> = ({ children, containerRef }) => {
  return (
    <>
      <ScrollProvider containerRef={containerRef}>{children}</ScrollProvider>
    </>
  );
};

export default AppContext;
