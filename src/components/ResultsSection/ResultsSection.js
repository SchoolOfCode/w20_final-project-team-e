import React from "react";
import "../ResultsSection/ResultsSection.css";
// import kettleIcon from "../../images/kettle-icon.svg";
// import treeIcon from "../../images/tree-icon.svg";
import carIcon from "../../images/car-icon.svg";
import busIcon from "../../images/bus-icon.svg";
import planeIcon from "../../images/plane-icon.svg";
import taxiIcon from "../../images/taxi-icon.svg";
import trainIcon from "../../images/train-icon.svg";

export default function ResultsSection(props) {
  return (
    <section className="results-container">
      <div className="results-table">
        <table>
          <thead>
            <tr className="row-header">
              <th scope="col"></th>
              <th scope="col">Distance (km)</th>
              <th scope="col">Kettles Boiled</th>
              <th scope="col">Trees to Replace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Car Data: */}
              <td scope="row" className="remove-border">
                <img src={carIcon} alt="car" className="icons"></img>
              </td>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.carKettles}</td>
              <td>{props.resultsData.carTrees}</td>
            </tr>
            <tr>
              {/* Bus Data: */}
              <td scope="row" className="remove-border">
                <img src={busIcon} alt="bus" className="icons"></img>
              </td>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.busKettles}</td>
              <td>{props.resultsData.busTrees}</td>
            </tr>
            <tr>
              {/* Train Data: */}
              <td scope="row" className="remove-border">
                <img src={trainIcon} alt="train" className="icons"></img>
              </td>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.trainKettles}</td>
              <td>{props.resultsData.trainTrees}</td>
            </tr>
            <tr>
              {/* Plane Data: */}
              <td scope="row" className="remove-border">
                <img src={planeIcon} alt="plane" className="icons"></img>
              </td>
              <td>{props.resultsData.distance}</td>
              <td>{props.resultsData.flightKettles}</td>
              <td>{props.resultsData.flightTrees}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="results-disclaimer">
        <h2>How did we calculate this?</h2>
        <p>
          Pixies. No seriously. We calulate your carbon based on stats for the
          most common transport choices, to help you make informed decisions
          about the best eco friednly option for you.
        </p>
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
