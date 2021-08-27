import React from "react";

export default function ResultsCard(props) {
  return (
    <div>
      <p>
        From: {props.formData.from} to: {props.formData.to}
      </p>
      <p>Your Journey is {props.resultsData.distance} km</p>
      <h3>Car</h3>
      <p>
        {props.resultsData.carCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.carKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.carTrees} trees
      </p>
      <h3>Train</h3>
      <p>
        {props.resultsData.trainCarbon} kg of CO<sub>2</sub>
      </p>
      <p>
        This is the same as boiling {props.resultsData.trainKettles} kettles
      </p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.trainTrees} trees
      </p>
      <h3>Bus</h3>
      <p>
        {props.resultsData.busCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.busKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.busTrees} trees
      </p>
      <h3>Taxi</h3>
      <p>
        {props.resultsData.taxiCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.taxiKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.taxiTrees} trees
      </p>
      <h3>Air</h3>
      <p>
        {props.resultsData.flightCarbon} kg of CO<sub>2</sub>
      </p>
      <p>
        This is the same as boiling {props.resultsData.flightKettles} kettles
      </p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.flightTrees} trees
      </p>
    </div>
  );
}
