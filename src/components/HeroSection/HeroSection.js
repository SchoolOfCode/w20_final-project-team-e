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
        <div className="item bottom-margin">
          <h1>EMISSION IMPOSSIBLE</h1>
          <p className="hero-text">
            An eco journey planner, calculating the mileage that will make emissions, impossible.
          </p>
        </div>
      </section>
    </div>
  );
}
