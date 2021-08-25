import React from "react";
import "./HeroSection.css";
import heroImage from "../../images/hero_image.png";

export default function HeroSection() {
  
  return (
    <div className="main-div">
      <section className="container">
        <div className="item">
          <img className="hero-image" src={heroImage} alt="Travelling illustration" />
        </div>
        <div className="item">
          <h2>EMISSION IMPOSSIBLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc.
          </p>
        </div>
      </section>
    </div>
  );
}
