// import React from "react";
// import styled from "styled-components";
// import "../ResultsCard/ResultsCard.css";

// export default function ResultsCard(props) {
//   return (
//     <section>
//       <div className="transport-icon">
//         <img src={props.vehicleImg} alt="vehicle icon" />
//       </div>
//       <div className="results-table">
//         <div className=" item results-mileage">
//           <p>{props.mileageData}</p>
//         </div>
//         <div className="item results-kettles">
//           <p>{props.kettleData}</p>
//         </div>
//         <div className="item results-trees">
//           <p>{props.treeData}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// const StyledResultsCard = styled.section`
//   display: flex;
//   background-color: purple;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   max-width: 500px;
//   // font-size: 2rem;
//   font-weight: bolder;

//   img {
//     transform: scale(1);
//     width: 100px;
//   }

//   .item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     flex-basis: 100%;
//     width: 200px;
//   }

//   // .transport-icon {
//   //   width: 350px;

//   // }

//   .results-table {
//     display: flex;
//     flex-direction: row;
//     width: 500px;
//     padding: 100px;
//     border-style: solid solid none solid;
//     border-color: #64a7a8;
//     border-width: 3px;
//     // background-color: white;
//     // border-radius: 0 0 0 10px;
//     // margin: 0 20px 0 20px;
//     // border-radius: 15px 50px;
//   }
// `;

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
