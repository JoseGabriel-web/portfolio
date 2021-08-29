import NavMenuSVG from "@assets/icon/NavMenuSVG";
import Logo from "@components/Logo/Logo";
import NavLinks from "@components/NavLinks/NavLinks";
import scrollTo from "@helpers/scrollTo";
import usePageOffset from "@hooks/usePageOffset";
import { FC } from "react";
import { Link } from "react-router-dom";

interface props {
  setIsNavMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: FC<props> = ({ setIsNavMenuOpened }) => {
  const openNavMenu = () => setIsNavMenuOpened(true);
  const { top, left } = usePageOffset();

  const handleLogo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    scrollTo(0, 0);
    setIsNavMenuOpened(false);
  };

  return (
    <nav id="nav" style={{ top: `${top}px` }}>
      <Link className="nav-logo-wrapper" to="/" onClick={(e) => handleLogo(e)}>
        <Logo />
      </Link>
      <div className="nav-actions-wrapper">
        <div className="nav-mobile-btn-wrapper">
          <NavMenuSVG onClick={openNavMenu} size={45} />
        </div>
        <div className="nav-links-wrapper">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
