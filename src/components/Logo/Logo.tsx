import {
  useHandleMouseLeave,
  useHandleMouseOver,
} from "@context/customCursor/CustomCursorProvider";
import React from "react";

const Logo = ({ ...rest }) => {
  const handleMouseOver = useHandleMouseOver();
  const handleMouseLeave = useHandleMouseLeave();
  return (
    <h2
      {...rest}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="nav-logo"
    >
      JGMG
    </h2>
  );
};

export default Logo;
