import NavMenuSVG from "@assets/icon/NavMenuSVG";
import Logo from "@components/Logo/Logo";
import { useCustomCursor } from "@context/customCursor/CustomCursorProvider";
import { FC, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link, useHistory } from "react-router-dom";

interface props {
  setIsNavMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: FC<props> = ({ setIsNavMenuOpened }) => {
  const { setIsHovered } = useCustomCursor();
  const { scroll, isReady } = useLocomotiveScroll();
  const history = useHistory();

  const openNavMenu = () => setIsNavMenuOpened(true);

  return (
    <nav id="nav">
      <Link
        onClick={() => {
          history.push("/");
          scroll.scrollTo("top");
        }}
        className="nav-logo-wrapper"
        to="/"
      >
        <Logo />
      </Link>
      <div className="nav-menu-btn">
        <NavMenuSVG
          onClick={openNavMenu}
          size={45}
        />
      </div>
    </nav>
  );
};

export default Navigation;
