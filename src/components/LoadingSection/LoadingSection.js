import React from "react";
import LoadingImage from "../LoadingImage/LoadingImage";
import progressIcon from "../../images/nav_logo_mobile_black.png";
import completedIcon from "../../images/nav_logo_mobile.png";

export default function LoadingSection() {
  return (
    <div id="loading-section">
      <h2>Take a big breath</h2>
      <div>
        <img src={completedIcon} alt="Calculation complete icon"/>
        <p>We're calculating the distance of that journey.</p>
      </div>
      <div>
        <img src={completedIcon} alt="Calculation complete icon"/>
        <p>We're converting those carbon emissions into their equivalency of kettles boiled.</p>
      </div>
      <div>
        <img src={progressIcon} alt="Calculation in progress icon"/>
        <p>We're checking how many trees would need to be planted to offset those carbon emissions.</p>
      </div>
      <LoadingImage />
    </div>
  );
}
