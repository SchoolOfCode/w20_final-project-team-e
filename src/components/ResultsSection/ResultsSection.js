import React from "react";
import ResultsCard from "../ResultsCard/ResultsCard";
//import bicycleImg from "../ResultsCard/bicycle-icon.png";
import busImg from "../ResultsCard/bus-icon.png";
import carImg from "../ResultsCard/car-icon.png";
import planeImg from "../ResultsCard/plane-icon.png";
import taxiImg from "../ResultsCard/taxi-icon.png";
import trainImg from "../ResultsCard/train-icon.png";

export default function ResultsSection(props) {
  return (
    <div id="results-section">
      <h1>Results Section Component</h1>
      <p>Information about your journey:</p>

      {/* Car Data: */}
      <ResultsCard
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.carKettles}
        treeData={props.resultsData.carTrees}
        formData={props.formData}
        vehicleImg={carImg}
      />

      {/* Taxi Data: */}
      <ResultsCard
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.taxiKettles}
        treeData={props.resultsData.taxiTrees}
        formData={props.formData}
        vehicleImg={taxiImg}
      />

      {/* Bus Data: */}
      <ResultsCard
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.busKettles}
        treeData={props.resultsData.busTrees}
        formData={props.formData}
        vehicleImg={busImg}
      />

      {/* Train Data: */}
      <ResultsCard
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.trainKettles}
        treeData={props.resultsData.trainTrees}
        formData={props.formData}
        vehicleImg={trainImg}
      />

      {/* Plane Data: */}
      <ResultsCard
        mileageData={props.resultsData.distance}
        kettleData={props.resultsData.flightKettles}
        treeData={props.resultsData.flightTrees}
        formData={props.formData}
        vehicleImg={planeImg}
      />
    </div>
  );
}
