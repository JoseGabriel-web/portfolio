import NavMenuSVG from "@assets/icon/NavMenuSVG";
import Logo from "@components/Logo/Logo";
import NavLinks from "@components/NavLinks/NavLinks";
import usePageOffset from "@hooks/usePageOffset";
import { FC, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

interface props {
  setIsNavMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: FC<props> = ({ setIsNavMenuOpened }) => {
  const openNavMenu = () => setIsNavMenuOpened(true);
  const { top, left } = usePageOffset()

  return (
    <nav id="nav" style={top && left ? { top, left } : {}}>
      <Link
        className="nav-logo-wrapper"
        to="/"
        onClick={() => setIsNavMenuOpened(false)}
      >
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
