import React from "react";
import "./Menu.css";
import Logo from "../../images/nav_logo_mobile.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="Emission Impossible logo" />
        </Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
