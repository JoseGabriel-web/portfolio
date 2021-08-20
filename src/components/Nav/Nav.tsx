import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface SectionPathInformation {
  label: string;
  path: string;
  hash?: string;
}

const Navigation = () => {
  const { scroll, isReady } = useLocomotiveScroll();

  useEffect(() => {
    console.log(scroll, isReady);
  }, [scroll, isReady]);

  const handleLinkClick = (hash?: string | undefined) => {
    if (typeof hash === "string") {
      scroll.scrollTo(hash);
    } else {
      scroll.scrollTo("top")
    }
  };

  const homeSections: SectionPathInformation[] = [
    { label: "about", path: "/", hash: "#about-section" },
    { label: "projects", path: "/" },
    { label: "contact", path: "/" },
  ];

  return (
    <nav>
      <Link onClick={() => handleLinkClick()} to="/" className="nav-logo-wrapper">
        <h2 className="nav-logo">JGMG</h2>
      </Link>
      <div className="nav-listWrapper">
        <ul className="nav-list">
          {homeSections.map(({ label, path, hash }) => (
            <Link
              onClick={() => handleLinkClick(hash)}
              to={path}
              className="nav-list-item"
            >
              <h3>{label}</h3>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
