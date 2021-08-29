import { FC } from "react";

const NavMenuSVG: FC<SvgProps> = ({ onClick, size, ...rest }) => {
  return (
    <div className="nav-menu-icon check-hover" {...rest} onClick={onClick}>
      <span style={{ width: size, display: "block" }} />
    </div>
  );
};

export default NavMenuSVG;
