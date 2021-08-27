import sections from "@assets/data/links";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FC } from "react";
import {
  useHandleMouseOver,
  useHandleMouseLeave,
} from "@context/customCursor/CustomCursorProvider";
import scrollIntoView from "@helpers/scrollIntoView";

const NavLinks: FC = () => {
  const location = useLocation();
  const history = useHistory()
  const handleMouseOver = useHandleMouseOver();
  const handleMouseLeave = useHandleMouseLeave();

  const handleClick = ({ path, hash }: { path: string, hash: string | undefined }) => {
    history.push(path)
    if(hash) {
      scrollIntoView(hash)
    }
  }

  return (
    <ul className="links-wrapper">
      {sections.map(({ hash, label, path }) => (
        <Link
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          to={`${!!hash ? path : path + hash}`}
          onClick={() => handleClick({ hash, path })}
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
