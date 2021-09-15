import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "../Home/Home";
// import Blog from "../Blog/Blog";

//Icons
import bicycleIcon from "../../images/bicycle-icon.png";
import carIcon from "../../images/car-icon.png";
import busIcon from "../../images/bus-icon.png";
import trainIcon from "../../images/train-icon.png";
import flightIcon from "../../images/flight-icon.png";

//Set state for the form data
export default function App() {
  const bodyScrollLock = require("body-scroll-lock");
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  const targetElement = document.querySelector("html");

  //State - to/from
  const initialFormData = {
    from: "",
    to: "",
  };
  const [formData, updateFormData] = useState(initialFormData);
  //const [showResults, changeShowResults] = useState(false)

  //if to/from is an empty string - results card is hidden
  //if to/from is not an empty string - results card is visible

  //state for results card
  const [resultsData, updateResultsData] = useState([]);

  //Distance API
  const distanceKey = "2Ms4naKG2GfSDZTrwZCG35OhUu0pI";
  // const headers = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
  //     "x-rapidapi-key": "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
  //   },
  // };

  async function getFootprint() {
    try {
      //Car
      let carDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&destinations=${formData.to}&key=${distanceKey}`
      );
      let carDistanceData = await carDistanceResponse.json();
      let carDistance =
        carDistanceData.rows[0].elements[0].distance.value / 1000;

      // let carResponse = await fetch(
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${carDistance}`,
      //   headers
      // );
      // let carData = await carResponse.json();

      //Train
      let trainDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&transit_mode=rail&mode=transit&destinations=${formData.to}&key=${distanceKey}`
      );
      let trainDistanceData = await trainDistanceResponse.json();
      let trainDistance =
        trainDistanceData.rows[0].elements[0].distance.value / 1000;

      // let trainResponse = await fetch(
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${trainDistance}`,
      //   headers
      // );
      // let trainData = await trainResponse.json();

      //Bus
      let busDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&mode=bus&destinations=${formData.to}&key=${distanceKey}`
      );
      let busDistanceData = await busDistanceResponse.json();
      let busDistance =
        busDistanceData.rows[0].elements[0].distance.value / 1000;

      // let busResponse = await fetch(
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${busDistance}`,
      //   headers
      // );
      // let busData = await busResponse.json();

      //Bike
      let bikeDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&mode=bicycling&destinations=${formData.to}&key=${distanceKey}`
      );
      let bikeDistanceData = await bikeDistanceResponse.json();
      let bikeDistance =
        bikeDistanceData.rows[0].elements[0].distance.value / 1000;
      // let bikeResponse = await fetch(
      //   // The carbon footprint is based on a medium car here
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${bikeDistance}`,
      //   headers
      // );
      // let bikeData = await bikeResponse.json();

      //Flight
      let flightDistanceResponse = await fetch(
        `https://distanceto.p.rapidapi.com/get?route=%20%5B%7B%22t%22%3A%22${formData.from}%22%7D%2C%7B%22t%22%3A%22${formData.to}%22%7D%5D&car=false&foot=false`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "distanceto.p.rapidapi.com",
            "x-rapidapi-key":
              "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
          },
        }
      );
      let flightDistanceData = await flightDistanceResponse.json();
      let flightDistance =
        flightDistanceData.steps[0].distance.flight[0].distance;

      // let flightResponse = await fetch(
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${flightDistance}`,
      //   headers
      // );
      // let flightData = await flightResponse.json();

      // // Rough idea of using promise to render component when it is ready
      // let checkApi = new Promise((resolve, reject) => {
      //   if(resultsData !== ""){
      //     resolve('Use function to render components')
      //   } else if(resultsData === ""){
      //     reject('Populate the error message for data not being retrieved')
      //   }
      // })

      updateResultsData([
        ...resultsData,
        {
          vehicle: "bicycle",
          icon: bicycleIcon,
          distance: Math.ceil(bikeDistance),
          carbon: Math.ceil(bikeDistance * 0.021),
          trees: Math.ceil((bikeDistance * 0.021) / 24),
        },
        {
          vehicle: "car",
          icon: carIcon,
          distance: Math.ceil(carDistance),
          carbon: Math.ceil(carDistance * 0.18659),
          trees: Math.ceil((carDistance * 0.18659) / 24),
        },
        {
          vehicle: "bus",
          icon: busIcon,
          distance: Math.ceil(busDistance),
          carbon: Math.ceil(busDistance * 0.089),
          trees: Math.ceil((busDistance * 0.089) / 24),
        },
        {
          vehicle: "train",
          icon: trainIcon,
          distance: Math.ceil(trainDistance),
          carbon: Math.ceil(trainDistance * 0.06),
          trees: Math.ceil((trainDistance * 0.06) / 24),
        },
        {
          vehicle: "flight",
          icon: flightIcon,
          distance: Math.ceil(flightDistance),
          carbon: Math.ceil(flightDistance * 0.1753),
          trees: Math.ceil((flightDistance * 0.1753) / 24),
        },
      ]);
    } catch (err) {
      alert(
        "Oh no! We couldn't match your search to any locations, please try again!"
      );
      setLoadingComponent(false);
    }
  }

  // Loading component to display for 4.5 seconds when the search button is pressed.
  const [showLoadingComponent, setLoadingComponent] = useState(false);

  const handleLoadingComponent = () => {
    setLoadingComponent(true);
    setTimeout(() => {
      setLoadingComponent(false);
    }, 6000);
  };

  // Search button logic
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // When search button is clicked -> If display section is visible, immediately hide and then reappear after 4 seconds
  const [displayResults, setDisplayResults] = useState(false);

  const displayResultsComponent = () => {
    if (displayResults === true) {
      setDisplayResults(false);
    }

    setTimeout(() => {
      setDisplayResults(true);
      document
        .getElementById("results-table")
        .scrollIntoView({ block: "center" });
      document.getElementById("homescreen").scrollIntoView();
    }, 6000);
  };

  const handleSubmit = (e) => {
    handleLoadingComponent();
    e.preventDefault();
    getFootprint();
    displayResultsComponent();
  };

  const [openModal, setOpenModal] = useState(false);
  if (openModal === true || showLoadingComponent === true) {
    disableBodyScroll(targetElement);
  } else {
    enableBodyScroll(targetElement);
  }

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route path="/blog">
          <Blog openModal={openModal} setOpenModal={setOpenModal} />
        </Route> */}
        <Route path="/">
          <Home
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showLoadingComponent={showLoadingComponent}
            displayResults={displayResults}
            resultsData={resultsData}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Route>
      </Switch>
    </Router>
  );
}
