import React from "react";

import ResultsCard from "../ResultsCard/ResultsCard";

export default function ResultsSection(props) {
  return (
    <div id="results-section">
      <h1>Results Section Component</h1>
      <p>Information about your journey:</p>
      <ResultsCard resultsData={props.resultsData} formData={props.formData} />
    </div>
  );
}
