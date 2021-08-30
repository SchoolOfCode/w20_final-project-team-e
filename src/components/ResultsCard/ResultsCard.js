import React from "react";
import styled from "styled-components";
// import "../ResultsCard/ResultsCard.css";

export default function ResultsCard(props) {
  return (
    <StyledResultsCard>
      <div className="item transport-icon">
        <img src={props.vehicleImg} alt="vehicle icon" />
      </div>
      <div className="item results-table">
        <div className="row">
          <div className=" item results-mileage">
            <p>{props.mileageData}</p>
          </div>
          <div className="item results-kettles">
            <p>{props.kettleData}</p>
          </div>
          <div className="item results-trees">
            <p>{props.treeData}</p>
          </div>
        </div>
      </div>
    </StyledResultsCard>
  );
}

const StyledResultsCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 30%;
  font-size: 2rem;
  font-weight: bolder;

  img {
    width: 50px;
    hieght: 50px;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 100%;
    margin: 0 20px 0 20px;
  }
  .results-table {
    padding: 50px;
    background-color: white;
    border-style: solid solid none solid;
    border-color: #64a7a8;
    border-width: 3px;
    // border-radius: 15px 50px;
  }
`;

// PSUEDO CODE

//1. define plain table with html
// Make a grid of 6(rows) by 2(columns)
// Create a border around row 2 to row 6
// Remove separators from columns 2 and 3
// Change colour to green and increase line weight
//2. Get the Data we want to display
//3. Define colums for the table
//4. include desired css

// export default function ResultsCard(props) {
//   return (
//     <div>
//       <p>
//         From: {props.formData.from} to: {props.formData.to}
//       </p>
//       <p>Your Journey is {props.resultsData.distance} km</p>
//       <h3>Car</h3>
//       <p>
//         {props.resultsData.carCarbon} kg of CO<sub>2</sub>
//       </p>
//       <p>This is the same as boiling {props.resultsData.carKettles} kettles</p>
//       <p>
//         To offset this carbon you would need to plant{" "}
//         {props.resultsData.carTrees} trees
//       </p>
//       <h3>Train</h3>
//       <p>
//         {props.resultsData.trainCarbon} kg of CO<sub>2</sub>
//       </p>
//       <p>
//         This is the same as boiling {props.resultsData.trainKettles} kettles
//       </p>
//       <p>
//         To offset this carbon you would need to plant{" "}
//         {props.resultsData.trainTrees} trees
//       </p>
//       <h3>Bus</h3>
//       <p>
//         {props.resultsData.busCarbon} kg of CO<sub>2</sub>
//       </p>
//       <p>This is the same as boiling {props.resultsData.busKettles} kettles</p>
//       <p>
//         To offset this carbon you would need to plant{" "}
//         {props.resultsData.busTrees} trees
//       </p>
//       <h3>Taxi</h3>
//       <p>
//         {props.resultsData.taxiCarbon} kg of CO<sub>2</sub>
//       </p>
//       <p>This is the same as boiling {props.resultsData.taxiKettles} kettles</p>
//       <p>
//         To offset this carbon you would need to plant{" "}
//         {props.resultsData.taxiTrees} trees
//       </p>
//       <h3>Air</h3>
//       <p>
//         {props.resultsData.flightCarbon} kg of CO<sub>2</sub>
//       </p>
//       <p>
//         This is the same as boiling {props.resultsData.flightKettles} kettles
//       </p>
//       <p>
//         To offset this carbon you would need to plant{" "}
//         {props.resultsData.flightTrees} trees
//       </p>
//     </div>
//   );
// }
