import {
  useHandleMouseOver,
  useHandleMouseLeave,
} from "@context/customCursor/CustomCursorProvider";
import React, { FC } from "react";

const NavMenuSVG: FC<SvgProps> = ({ onClick, size, ...rest }) => {
  const handleMouseOver = useHandleMouseOver();
  const handleMouseLeave = useHandleMouseLeave();

  return (
    <div
      className="nav-menu-icon"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...rest}
      onClick={onClick}
    >
      <span style={{ width: size, display: "block" }} />
      <small className="nav-menu-icon-label">Menu</small>
    </div>
  );
};

export default NavMenuSVG;
