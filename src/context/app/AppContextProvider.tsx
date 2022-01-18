import { FC } from "react";
import SmoothScrollbarProvider from "./SmoothScrollbarProvider";

const AppContextProvider: FC = ({ children }) => {
  return <SmoothScrollbarProvider>{children}</SmoothScrollbarProvider>;
};

export default AppContextProvider;
