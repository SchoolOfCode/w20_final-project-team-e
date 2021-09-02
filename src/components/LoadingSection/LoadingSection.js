import React from "react";

import LoadingImage from "../LoadingImage/LoadingImage";

export default function LoadingSection() {
  return (
    <div id="loading-section">
      <h2>Take a big breath</h2>
      <p>We're just calculating the emissions for your journey.</p>
      <LoadingImage />
    </div>
  );
}
