import React from "react";

const Logo = ({ ...rest }) => {
  return (
    <h2 {...rest} className="nav-logo check-hover">
      JGMG
    </h2>
  );
};

export default Logo;
