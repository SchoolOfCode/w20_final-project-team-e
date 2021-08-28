import React from "react";

export default function ResultsCard(props) {
    
  return (
      <section>
        <div className="transport-icon">
          {/* <img /> */}
        </div>
        <div className="results-table">
          <div className="results-mileage">
            {/* This is where the mileage results are passed*/}
            <p>The journey is {props.mileageData} Km.</p>
          </div>
          <div className="results-kettles">
            {/* This is where the kettles results are passed*/}
            <p>This is the equivalent of {props.kettleData} kettles boiled.</p>
          </div>
          <div className="results-trees">
            {/* This is where the trees results are passed*/}
            <p>You would need to plant {props.treeData} trees to offset this amount of carbon.</p>
          </div>
        </div>
      </section>
    )
}

// PSUEDO CODE

//1. define plain table with html
    // Make a grid of 6(rows) by 4(columns)
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
