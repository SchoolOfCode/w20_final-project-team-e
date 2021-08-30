import React from "react";
import ResultsCard from "../ResultsCard/ResultsCard";
//import bicycleImg from "../ResultsCard/bicycle-icon.png";
import kettleSVG from "/Users/catherinebutler/Documents/school-of-code/w20_final-project-team-e/src/images/kettle-icon.svg";
import busImg from "../ResultsCard/bus-icon.png";
import carImg from "../ResultsCard/car-icon.png";
import planeImg from "../ResultsCard/plane-icon.png";
import taxiImg from "../ResultsCard/taxi-icon.png";
import trainImg from "../ResultsCard/train-icon.png";
import styled from "styled-components";

export default function ResultsSection(props) {
  return (
    <StyledResultsSection>
      {/* <p>Information about your journey:</p> */}
      <div className="results-headings">
        {/* <div className="empty"></div> */}
        <div className="mileage-title">
          <p>1 mileage</p>
          <img src={kettleSVG} alt="kettle icon" />
        </div>
        <div className="kettles-title">
          <p>2 kettles</p>
          <img src={kettleSVG} alt="kettle icon" />
        </div>
        <div className="trees-title">
          <p>3 trees</p>
          <img src={kettleSVG} alt="kettle icon" />
        </div>
      </div>

      <div className="results-items">
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
          // id="plane-card"
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.flightKettles}
          treeData={props.resultsData.flightTrees}
          formData={props.formData}
          vehicleImg={planeImg}
        />
        <h1>How did we calculate this?</h1>
        <p>
          Pixies. No seriously. We calculate the carbon burned from your
          mileage, based on the equivalent to boil a kettle then we work out
          what carbon would need to be returned to the planet, say by planting
          trees. We have chosen the most common factors to help you make
          informed decisions about the best eco friednly option for you.
        </p>
      </div>
    </StyledResultsSection>
  );
}

// const StyledResultsSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   height: 50%
//   width: 50%;

//   .results-items {
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//   }
// `;

const StyledResultsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  background-color: green;
  margin: 0 auto;

  .results-headings {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    background-color: red;

    // .empty {
    //   width: 0px;
    //   background-color: blue;
    // }

    .mileage-title {
      width: 150px;
      background-color: violet;
    }
    .kettles-title {
      width: 150px;
      background-color: yellow;
    }
    .trees-title {
      width: 150px;
      background-color: cyan;
    }
  }
`;
