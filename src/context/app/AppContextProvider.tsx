import { FC } from "react";
import CustomCursorProvider from "@context/customCursor/CustomCursorProvider";

const AppContextProvider: FC = ({ children }) => {
  return <CustomCursorProvider>{children}</CustomCursorProvider>;
};

export default AppContextProvider;
