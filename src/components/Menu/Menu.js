import React from "react";
import "./Menu.css";
import Logo from "../../images/nav_logo_mobile.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Menu() {
  
  //Assigning location variable
  const location = useLocation();

  //Destructuring pathname from location
  const { pathname } = location;
  
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="Emission Impossible logo" />
        </Link>
        <div className="nav-menu">
          <div className="nav-menu-item">
            <Link to="/" className="nav-text">
              {/* Checking the current path name using javascript ternary operator and if true, assigning nav-button-active className to it */}
              <button className={splitLocation[1] === "" ? "nav-button-active" : "nav-button"}>Home</button>
            </Link>
          </div>
          <div className="nav-menu-item">
            <Link to="/blog" className="nav-text">
              <button className={splitLocation[1] === "blog" ? "nav-button-active" : "nav-button"}>Blog</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
