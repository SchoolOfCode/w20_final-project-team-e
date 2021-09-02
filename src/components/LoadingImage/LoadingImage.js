import React from "react";
import "./LoadingImage.css"
import loadingAnimation from "../../images/loading-animation.gif"

export default function LoadingImage() {
  return (
    <div className="flex-container">
      <img className="loading-animation" src={loadingAnimation} alt="Car moving through space" />
    </div>
  );
};
