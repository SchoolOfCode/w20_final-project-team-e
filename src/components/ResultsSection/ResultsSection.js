import React from "react";
import ResultsCard from "../ResultsCard/ResultsCard";
//import bicycleImg from "../ResultsCard/bicycle-icon.png";
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
        <div className="empty"></div>
        <div className="results-title">
          <p>1</p>
          <p>2</p>
          <p>3</p>
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
          id="plane-card"
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
    justify-content: center;
    background-color: red;

    .empty {
      width: 100px;
      background-color: blue;
    }

    p {
      width: 150px;
      color: white;
    }
  }

  // .results-items {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  //   background-color: blue;
  // }
`;
