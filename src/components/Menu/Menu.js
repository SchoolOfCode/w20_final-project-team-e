import React from "react";
import "./Menu.css";
import Logo from "../../images/nav_logo_mobile.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Menu() {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="Emission Impossible logo" />
        </Link>
        <div className="nav-menu">
          <div className="nav-menu-item">
            <Link to="/" className="nav-text">
              <button className="nav-button">Home</button>
            </Link>
          </div>
          <div className="nav-menu-item">
            <Link to="/blog" className="nav-text">
              <button className="nav-button">Blog</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
