import React from "react";
import "../ResultsSection/ResultsSection.css";
import kettleIcon from "../../images/kettle-icon.svg";
import treeIcon from "../../images/tree-icon.svg";
import carIcon from "../../images/car-icon.svg";
import busIcon from "../../images/bus-icon.svg";
import planeIcon from "../../images/plane-icon.svg";
import taxiIcon from "../../images/taxi-icon.svg";
import trainIcon from "../../images/train-icon.svg";

export default function ResultsSection(props) {
  return (
    <section className="results-container">
      <div className="results-disclaimer">
        <h2>How did we calculate this?</h2>
        <p>
          Pixies. No seriously. We calculate the carbon burned from your
          mileage, based on the equivalent to boil a kettle then we work out
          what carbon would need to be returned to the planet, say by planting
          trees. We have chosen the most common factors to help you make
          informed decisions about the best eco friednly option for you.
        </p>
      </div>
      <div className="results-table">
        <table>
          <thead>
            <tr className="row-header">
              <th scope="col"></th>
              <th scope="col">Distance</th>
              <th scope="col">
                Kettles Boiled
                <img src={kettleIcon} alt="kettle" width="100px"></img>
              </th>
              <th scope="col">
                Trees to replace
                <img src={treeIcon} alt="tree" width="100px"></img>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Car Data: */}
              <th scope="row">
                <img src={carIcon} alt="car" width="100px"></img>
              </th>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.carKettles}</td>
              <td>{props.resultsData.carTrees}</td>
            </tr>
            <tr>
              {/* Taxi Data: */}
              <th scope="row">
                <img src={taxiIcon} alt="taxi" width="100px"></img>
              </th>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.taxiKettles}</td>
              <td>{props.resultsData.taxiTrees}</td>
            </tr>
            <tr>
              {/* Bus Data: */}
              <th scope="row">
                <img src={busIcon} alt="bus" width="100px"></img>
              </th>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.busKettles}</td>
              <td>{props.resultsData.busTrees}</td>
            </tr>
            <tr>
              {/* Train Data: */}
              <th scope="row">
                <img src={trainIcon} alt="train" width="100px"></img>
              </th>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.trainKettles}</td>
              <td>{props.resultsData.trainTrees}</td>
            </tr>
            <tr>
              {/* Plane Data: */}
              <th scope="row">
                <img src={planeIcon} alt="plane" width="100px"></img>
              </th>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.flightKettles}</td>
              <td>{props.resultsData.flightTrees}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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

// const StyledResultsSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 500px;
//   background-color: green;
//   margin: 0 auto;

//   .results-headings {
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: flex-end;
//     background-color: red;

//     // .empty {
//     //   width: 0px;
//     //   background-color: blue;
//     // }

//     .mileage-title {
//       width: 150px;
//       background-color: violet;
//     }
//     .kettles-title {
//       width: 150px;
//       background-color: yellow;
//     }
//     .trees-title {
//       width: 150px;
//       background-color: cyan;
//     }
//   }
// `;
