import React from "react";
import "../ResultsSection/ResultsSection.css";
import carIcon from "../../images/car-icon.svg";
import busIcon from "../../images/bus-icon.svg";
import planeIcon from "../../images/plane-icon.svg";
import bicycleIcon from "../../images/bicycle-icon.svg";
import trainIcon from "../../images/train-icon.svg";

export default function ResultsSection(props) {
  let kettlesBoiledBicycle = props.resultsData.bikeKettles;
  let kettlesBoiledCar = props.resultsData.carKettles;
  let kettlesBoiledBus = props.resultsData.busKettles;
  let kettlesBoiledTrain = props.resultsData.trainKettles;
  let kettlesBoiledPlane = props.resultsData.flightKettles;

  const convertNumber = (transport) => {
    if (transport < 1000) {
      return transport;
    }
    if (transport >= 1000) {
      transport = transport / 1000;
      transport = transport.toFixed(1);
      return transport + "K";
    }
  };

  return (
    <section className="results-container">
      <div className="results-table" id="results-table">
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
            {/* Car Data: */}
            <tr>
              <td className="remove-border">
                <img src={carIcon} alt="car" className="icons"></img>
              </td>
              <td>{props.resultsData.carDistance}</td>
              <td>{convertNumber(kettlesBoiledCar)}</td>
              <td>{props.resultsData.carTrees}</td>
            </tr>
            <tr>
              {/* Bike Data: */}
              <th scope="row">
                <img src={bicycleIcon} alt="bicycle" width="100px"></img>
              </th>
              <td>{props.resultsData.bikeDistance}</td>
              <td>{convertNumber(kettlesBoiledBicycle)}</td>
              <td>{props.resultsData.bikeTrees}</td>
            </tr>
            {/* Bus Data: */}
            <tr>
              <td className="remove-border">
                <img src={busIcon} alt="bus" className="icons"></img>
              </td>
              <td>{props.resultsData.busDistance}</td>
              <td>{convertNumber(kettlesBoiledBus)}</td>
              <td>{props.resultsData.busTrees}</td>
            </tr>
            {/* Train Data: */}
            <tr>
              <td className="remove-border">
                <img src={trainIcon} alt="train" className="icons"></img>
              </td>
              <td>{props.resultsData.trainDistance}</td>
              <td>{convertNumber(kettlesBoiledTrain)}</td>
              <td>{props.resultsData.trainTrees}</td>
            </tr>
            {/* Plane Data: */}
            <tr>
              <td className="remove-border">
                <img src={planeIcon} alt="plane" className="icons"></img>
              </th>
              <td>{props.resultsData.flightDistance}</td>
              <td>{convertNumber(kettlesBoiledPlane)}</td>
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
          about the best eco friendly option for you.
        </p>
      </div>
    </section>
  );
}
