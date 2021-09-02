import React from "react";
import "./LoadingSection.css";
import LoadingImage from "../LoadingImage/LoadingImage";
import progressIcon from "../../images/loading-icon.gif";
import completedIcon from "../../images/tick-icon.png";

export default function LoadingSection() {
  return (
    <div id="loading-section">
      <div className="loading-component-main">
        <h2>Take a big breath</h2>
        <div className="loading-component-item">
        <p><img className="loading-component-icon" src={completedIcon} alt="Calculation complete icon"/>We're calculating the distance of that journey.</p>
        </div>
        <div className="loading-component-item">
          <p><img className="loading-component-icon" src={completedIcon} alt="Calculation complete icon"/>We're converting those carbon emissions into their equivalency of kettles boiled.</p>
        </div>
        <div className="loading-component-item">
          <p><img className="loading-component-icon" src={progressIcon} alt="Calculation in progress icon"/>We're checking how many trees would need to be planted to offset those carbon emissions.</p>
        </div>
      </div>
      <LoadingImage />
    </div>
  );
}
