import React from "react";
import "../ResultsSection/ResultsSection.css";
import kettleSVG from "../../images/kettle-icon.svg";
import carIcon from "../ResultsCard/car-icon.png";
import busIcon from "../ResultsCard/bus-icon.png";
import planeIcon from "../ResultsCard/plane-icon.png";
import taxiIcon from "../ResultsCard/taxi-icon.png";
import trainIcon from "../ResultsCard/train-icon.png";

export default function ResultsSection(props) {
  return (
    <section>
      <div>
        <table class="table" className="results-table">
          <thead>
            <tr className="row-header">
              <th scope="col">#</th>
              <th scope="col">
                Distance <img src={kettleSVG} alt="kettle" width="100px"></img>
              </th>
              <th scope="col">
                Kettles<img src={kettleSVG} alt="kettle" width="100px"></img>
              </th>
              <th scope="col">
                Trees<img src={kettleSVG} alt="kettle" width="100px"></img>
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
        {/* <ResultsCard
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.carKettles}
          treeData={props.resultsData.carTrees}
          formData={props.formData}
          vehicleImg={carImg}
        /> */}

        {/* Taxi Data: */}
        {/* <ResultsCard
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.taxiKettles}
          treeData={props.resultsData.taxiTrees}
          formData={props.formData}
          vehicleImg={taxiImg}
        /> */}

        {/* Bus Data: */}
        {/* <ResultsCard
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.busKettles}
          treeData={props.resultsData.busTrees}
          formData={props.formData}
          vehicleImg={busImg}
        /> */}

        {/* Train Data: */}
        {/* <ResultsCard
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.trainKettles}
          treeData={props.resultsData.trainTrees}
          formData={props.formData}
          vehicleImg={trainImg}
        /> */}

        {/* Plane Data: */}
        {/* <ResultsCard
          // id="plane-card"
          mileageData={props.resultsData.distance}
          kettleData={props.resultsData.flightKettles}
          treeData={props.resultsData.flightTrees}
          formData={props.formData}
          vehicleImg={planeImg}
        /> */}
        <h1>How did we calculate this?</h1>
        <p>
          Pixies. No seriously. We calculate the carbon burned from your
          mileage, based on the equivalent to boil a kettle then we work out
          what carbon would need to be returned to the planet, say by planting
          trees. We have chosen the most common factors to help you make
          informed decisions about the best eco friednly option for you.
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
