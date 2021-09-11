import React from "react";
import "../ResultsSection/ResultsSection.css";
import carIcon from "../../images/car-icon.svg";
import busIcon from "../../images/bus-icon.svg";
import planeIcon from "../../images/plane-icon.svg";
import bicycleIcon from "../../images/bicycle-icon.svg";
import trainIcon from "../../images/train-icon.svg";

export default function ResultsSection(props) {

  // // Abbreviates numbers that are 4-digits or longer
  // const abbreviateLargeNumber = (n) => {
  //   if (n < 1000) {
  //     return n;
  //   }
  //   if (n >= 1000) {
  //     n = n / 1000;
  //     n = n.toFixed(1);
  //     return n + "K";
  //   }
  // };

  return (
    <section className="results-container">
      <div className="results-table" id="results-table">
        <table>
          <thead>
            <tr className="row-header">
              <th scope="col"></th>
              <th scope="col">Distance (km)</th>
              <th scope="col">Carbon Emissions (kg)</th>
              <th scope="col">Trees to Replace</th>
            </tr>
          </thead>
          <tbody>
            {/* Bicycle Data: */}
            <tr>
              <td className="remove-border">
                <img src={bicycleIcon} alt="bicycle" width="100px"></img>
              </td>
              <td>{props.resultsData.bicycle.distance}</td>
              <td>{props.resultsData.bicycle.carbon}</td>
              <td>{props.resultsData.bicycle.trees}</td>
            </tr>
            {/* Car Data: */}
            <tr>
              <td className="remove-border">
                <img src={carIcon} alt="car" className="icons"></img>
              </td>
              <td>{props.resultsData.car.distance}</td>
              <td>{props.resultsData.car.carbon}</td>
              <td>{props.resultsData.car.trees}</td>
            </tr>
            {/* Bus Data: */}
            <tr>
              <td className="remove-border">
                <img src={busIcon} alt="bus" className="icons"></img>
              </td>
              <td>{props.resultsData.bus.distance}</td>
              <td>{props.resultsData.bus.carbon}</td>
              <td>{props.resultsData.bus.trees}</td>
            </tr>
            {/* Train Data: */}
            <tr>
              <td className="remove-border">
                <img src={trainIcon} alt="train" className="icons"></img>
              </td>
              <td>{props.resultsData.train.distance}</td>
              <td>{props.resultsData.train.carbon}</td>
              <td>{props.resultsData.train.trees}</td>
            </tr>
            {/* Flight Data: */}
            <tr>
              <td className="remove-border">
                <img src={planeIcon} alt="plane" className="icons"></img>
              </td>
              <td>{props.resultsData.flight.distance}</td>
              <td>{props.resultsData.flight.carbon}</td>
              <td>{props.resultsData.flight.trees}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="results-disclaimer">
        <h2>How did we calculate this?</h2>
        <p>
          Pixies. No seriously. We calculate your carbon based on stats for the
          most common transport choices, to help you make informed decisions
          about the best eco friendly option for you.
        </p>
      </div>
    </section>
  );
}
