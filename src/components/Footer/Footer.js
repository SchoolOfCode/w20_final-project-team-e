import React from "react";
import "./Footer.css";
import helpModalImage from "../../images/help_modal_illustration.png";

export default function Footer(props) {
  return (
    <footer className="footerContainer">
      <div className="footerText">
        <p id="footerHeader">WE ARE EMISSION IMPOSSIBLE</p>
        <p>Find us on GitHub:</p>
        <a href="https://github.com/catherine-butler">Catherine Butler</a>
        <a href="https://github.com/JHannah30">Jamie Hannah</a>
        <a href="https://github.com/natpinnock">Natalie Pinnock</a>
      </div>
      <div className="footerImage">
        <img
          className="footerImage"
          src={helpModalImage}
          alt="lady with suitcase"
        ></img>
      </div>
    </footer>
  );
}
