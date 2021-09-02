import React from "react";
import "./LoadingImage.css"
import loadingAnimation from "../../images/loading-animation.gif"

export default function LoadingImage() {
  return (
    <div className="car-animation-flex-container">
      <img className="car-animation" src={loadingAnimation} alt="Car moving through space" />
    </div>
  );
};
