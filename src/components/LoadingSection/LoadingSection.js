import React from "react";
import "./LoadingSection.css";
import progressIcon from "../../images/loading-icon.gif";
import completedIcon from "../../images/tick-icon.png";
import carAnimation from "../../images/loading-animation.gif"

export default function LoadingSection(props) {
  
  return (
    <div id="loading-section">
      <div className="loading-component-background">
        <div className="loading-component-container">
          <h2 className="loading-component-title">Take a big breath!</h2>
          <div className="loading-component-item">
          <p><img className="loading-component-icon" src={completedIcon} alt="Calculation complete icon"/>We're calculating the distance from {props.formData.from} to {props.formData.to}.</p>
          </div>
          <div className="loading-component-item">
            <p><img className="loading-component-icon" src={completedIcon} alt="Calculation complete icon"/>We're converting those carbon emissions into their equivalency of kettles boiled.</p>
          </div>
          <div className="loading-component-item">
            <p><img className="loading-component-icon" src={progressIcon} alt="Calculation in progress icon"/>We're checking how many trees would need to be planted to offset those carbon emissions.</p>
          </div>
          <div className="car-animation-flex-container">
            <img className="car-animation" src={carAnimation} alt="Car moving through space" />
          </div>
        </div>
      </div>
    </div>
  );
}
 