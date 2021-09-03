import React from "react";
import "./Menu.css";
import Logo from "../../images/nav_logo_mobile.png";

export default function Menu() {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
        <a className="nav-logo-link" href="#homescreen">
          <img 
            className="nav-logo"
            src={Logo}
            alt="Emission Impossible logo"
          />
        </a>
      </div>
    </nav>
  );
}
