import React from "react";
import ResultsCard from "../ResultsCard/ResultsCard";

export default function ResultsSection(props) {
  return (
    <div id="results-section">
      <h1>Results Section Component</h1>
      <p>Information about your journey:</p>

      <h4>Car Data:</h4>
      <ResultsCard 
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.carKettles}
        treeData={props.resultsData.carTrees}
        formData={props.formData}
      />

      <h4>Taxi Data:</h4>
      <ResultsCard 
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.taxiKettles}
        treeData={props.resultsData.taxiTrees}
        formData={props.formData}
      />

      <h4>Bus Data:</h4>
      <ResultsCard 
        mileageData={props.resultsData.busKettles}
        kettleData={props.resultsData.busKettles}
        treeData={props.resultsData.busTrees}
        formData={props.formData}
      />

      <h4>Train Data:</h4>
      <ResultsCard 
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.trainKettles}
        treeData={props.resultsData.trainTrees}
        formData={props.formData}
      />

      <h4>Plane Data:</h4>
      <ResultsCard 
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.flightKettles}
        treeData={props.resultsData.flightTrees}
        formData={props.formData}
      />

    </div>
  );
}
