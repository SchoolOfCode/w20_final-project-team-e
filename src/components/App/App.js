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
      let distanceResponse = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&destinations=${formData.to}&key=${distanceKey}`
      );
      let distanceData = await distanceResponse.json();
      let distance = distanceData.rows[0].elements[0].distance.value / 1000;

      //Car
      let carResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${distance}`,
        headers
      );
      let carData = await carResponse.json();

      //Train
      let trainResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=NationalTrain&distance=${distance}`,
        headers
      );
      let trainData = await trainResponse.json();

      //Bus
      let busResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=ClassicBus&distance=${distance}`,
        headers
      );
      let busData = await busResponse.json();

      // //Taxi
      // let taxiResponse = await fetch(
      //   `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=Taxi&distance=${distance}`,
      //   headers
      // );
      // let taxiData = await taxiResponse.json();

      //Flight
      let flightResponse = await fetch(
        `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?type=ShortEconomyClassFlight&distance=${distance}`,
        headers
      );
      let flightData = await flightResponse.json();
      
      updateResultsData({
        ...resultsData,
        distance: distance.toFixed(2),
        carCarbon: carData.carbonEquivalent.toFixed(2),
        carKettles: Math.ceil(carData.carbonEquivalent / 0.015),
        carTrees: Math.ceil(carData.carbonEquivalent / 24),
        trainCarbon: trainData.carbonEquivalent.toFixed(2),
        trainKettles: Math.ceil(trainData.carbonEquivalent / 0.015),
        trainTrees: Math.ceil(trainData.carbonEquivalent / 24),
        busCarbon: busData.carbonEquivalent.toFixed(2),
        busKettles: Math.ceil(busData.carbonEquivalent / 0.015),
        busTrees: Math.ceil(busData.carbonEquivalent / 24),
        // taxiCarbon: taxiData.carbonEquivalent.toFixed(2),
        // taxiKettles: Math.ceil(taxiData.carbonEquivalent / 0.015),
        // taxiTrees: Math.ceil(taxiData.carbonEquivalent / 24),
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
