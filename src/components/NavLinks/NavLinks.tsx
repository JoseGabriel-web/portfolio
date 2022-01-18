import sections from "@assets/data/links";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FC } from "react";
import scrollIntoView from "@helpers/scrollIntoView";
import { v4 as uuid } from "uuid";

const NavLinks: FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleClick = ({
    path,
    hash,
  }: {
    path: string;
    hash: string | undefined;
  }) => {
    history.push(path);
    if (hash) {
      scrollIntoView(hash);
    }
  };

  return (
    <ul className="links-wrapper">
      {sections.map(({ hash, label, path }) => (
        <Link
          key={uuid()}
          to={`${!!hash ? path : path + hash}`}
          onClick={() => handleClick({ hash, path })}
          className={`link check-hover ${
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
