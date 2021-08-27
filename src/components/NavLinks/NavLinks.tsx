import sections from "@assets/data/links";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import {
  useHandleMouseOver,
  useHandleMouseLeave,
} from "@context/customCursor/CustomCursorProvider";

const NavLinks: FC = () => {
  const location = useLocation();
  const handleMouseOver = useHandleMouseOver();
  const handleMouseLeave = useHandleMouseLeave();

  return (
    <ul className="links-wrapper">
      {sections.map(({ hash, label, path }) => (
        <Link
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          to={`${!!hash ? path : path + hash}`}
          className={`link ${
            location.pathname.includes(label) || hash === location.hash
              ? "link__selected"
              : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
