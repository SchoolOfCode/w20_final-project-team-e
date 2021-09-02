import React from "react";
import "./HeroSection.css";
import heroImage from "../../images/hero_image.png";

export default function HeroSection() {
  
  return (
    <div className="main-div">
      <section className="hero-flex-container">
        <div className="hero-item">
          <img className="hero-image" src={heroImage} alt="Travelling illustration" />
        </div>
        <div className="hero-item">
          <div className="hero-text-section">
            <h1>EMISSION IMPOSSIBLE</h1>
            <p className="hero-p">
              An eco journey planner, calculating the mileage that will make emissions, impossible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
