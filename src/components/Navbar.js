import { NavLink } from "react-router-dom";
import React from "react";
const NavBar = () => {
  return (
    <div className="ui three item menu">
      <NavLink to="/" className=" item">
        Home
      </NavLink>
      <NavLink to="/about" className="item">
        About
      </NavLink>
      <NavLink to="/contact" className="item">
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;
