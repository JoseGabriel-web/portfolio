import { FC } from "react";
import ScrollProvider from "@context/scroll/ScrollProvider";

const AppContext: FC = ({ children }) => {
  return (
    <>
      <ScrollProvider>{children}</ScrollProvider>
    </>
  );
};

export default AppContext;
