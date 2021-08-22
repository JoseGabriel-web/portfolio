import { FC, MutableRefObject } from "react";
import ScrollProvider from "@context/scroll/ScrollProvider";
import CustomCursorProvider from "@context/customCursor/CustomCursorProvider";

const AppContext: FC<{ containerRef: MutableRefObject<any> }> = ({
  children,
  containerRef,
}) => {
  return (
    <CustomCursorProvider>
      <ScrollProvider containerRef={containerRef}>{children}</ScrollProvider>
    </CustomCursorProvider>
  );
};

export default AppContext;
