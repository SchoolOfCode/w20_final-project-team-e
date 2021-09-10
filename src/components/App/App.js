import { useState } from "react";
import React from "react";
import Sticky from "react-sticky-el";
import "./App.css";

import SearchSection from "../SearchSection/SearchSection";
import HeroSection from "../HeroSection/HeroSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
// import ResultsCard from "../ResultsCard/ResultsCard";
import Menu from "../Menu/Menu";
import HelpModal from "../HelpModal/HelpModal";

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
  const [resultsData, updateResultsData] = useState("");

  //Distance API
  const distanceKey = "2Ms4naKG2GfSDZTrwZCG35OhUu0pI";
  const headers = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      "x-rapidapi-key": "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
    },
  };

  async function getFootprint() {
    try {
      //Car
      let carDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&destinations=${formData.to}&key=${distanceKey}`
      );
      let carDistanceData = await carDistanceResponse.json();
      let carDistance =
        carDistanceData.rows[0].elements[0].distance.value / 1000;

      let carResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${carDistance}`,
        headers
      );
      let carData = await carResponse.json();

      //Train
      let trainDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&transit_mode=rail&mode=transit&destinations=${formData.to}&key=${distanceKey}`
      );
      let trainDistanceData = await trainDistanceResponse.json();
      let trainDistance =
        trainDistanceData.rows[0].elements[0].distance.value / 1000;

      let trainResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${trainDistance}`,
        headers
      );
      let trainData = await trainResponse.json();

      //Bus
      let busDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&mode=bus&destinations=${formData.to}&key=${distanceKey}`
      );
      let busDistanceData = await busDistanceResponse.json();
      let busDistance =
        busDistanceData.rows[0].elements[0].distance.value / 1000;

      let busResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${busDistance}`,
        headers
      );
      let busData = await busResponse.json();

      //Bike
      let bikeDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&mode=bicycling&destinations=${formData.to}&key=${distanceKey}`
      );
      let bikeDistanceData = await bikeDistanceResponse.json();
      let bikeDistance =
        bikeDistanceData.rows[0].elements[0].distance.value / 1000;

      let bikeResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${bikeDistance}`,
        headers
      );
      let bikeData = await bikeResponse.json();

      //Flight
      let flightDistanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&mode=air&destinations=${formData.to}&key=${distanceKey}`
      );
      let flightDistanceData = await flightDistanceResponse.json();
      let flightDistance =
        flightDistanceData.rows[0].elements[0].distance.value / 1000;

      let flightResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${flightDistance}`,
        headers
      );
      let flightData = await flightResponse.json();
      
      updateResultsData({
        ...resultsData,
        carDistance: carDistance.toFixed(2),
        carCarbon: carData.carbonEquivalent.toFixed(2),
        carKettles: Math.ceil(carData.carbonEquivalent / 0.015),
        carTrees: Math.ceil(carData.carbonEquivalent / 24),
        trainDistance: trainDistance.toFixed(2),
        trainCarbon: trainData.carbonEquivalent.toFixed(2),
        trainKettles: Math.ceil(trainData.carbonEquivalent / 0.015),
        trainTrees: Math.ceil(trainData.carbonEquivalent / 24),
        busDistance: busDistance.toFixed(2),
        busCarbon: busData.carbonEquivalent.toFixed(2),
        busKettles: Math.ceil(busData.carbonEquivalent / 0.015),
        busTrees: Math.ceil(busData.carbonEquivalent / 24),
        bikeDistance: bikeDistance.toFixed(2),
        bikeCarbon: bikeData.carbonEquivalent.toFixed(2),
        bikeKettles: Math.ceil(bikeData.carbonEquivalent / 0.015),
        bikeTrees: Math.ceil(bikeData.carbonEquivalent / 24),
        flightDistance: flightDistance.toFixed(2),
        flightCarbon: flightData.carbonEquivalent.toFixed(2),
        flightKettles: Math.ceil(flightData.carbonEquivalent / 0.015),
        flightTrees: Math.ceil(flightData.carbonEquivalent / 24),
      });
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
    }, 4000);
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
    }, 4000);
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
    <div className="App">
      {/* to be fixed at the top of the page? */}
      <Sticky>
        <Menu />
      </Sticky>
      <HeroSection />
      <SearchSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {showLoadingComponent ? <LoadingSection formData={formData} /> : null}
      {displayResults ? (
        <ResultsSection formData={formData} resultsData={resultsData} />
      ) : null}
      <button
        className={openModal ? "closeModalBtn" : "openModalBtn"}
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        ?
      </button>
      {openModal && <HelpModal closeModal={setOpenModal} />}
    </div>
  );
}
