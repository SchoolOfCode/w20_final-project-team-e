import React from "react";
import "./App.css";
import { useState } from "react";

import SearchSection from "../SearchSection/SearchSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import Menu from "../Menu/Menu";
import HelpModal from "../HelpModal/HelpModal";

//Set state for the form data
export default function App() {
  const initialFormData = {
    from: "",
    to: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  //Distance API
  const distanceKey = "2Ms4naKG2GfSDZTrwZCG35OhUu0pI";
  async function getFootprint() {
    let distanceResponse = await fetch(
      `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&destinations=${formData.to}&key=${distanceKey}`
    );
    let distanceData = await distanceResponse.json();
    console.log(
      `Your Journey is: ${distanceData.rows[0].elements[0].distance.text}`
    );
    let distance = distanceData.rows[0].elements[0].distance.value / 1000;

    //Car
    let carResponse = await fetch(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=MediumPetrolCar&distance=${distance}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key":
            "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
        },
      }
    );
    let carData = await carResponse.json();
    console.log(
      `Carbon Emissions by Car: ${
        carData.carbonEquivalent
      } kg. This is the equivalent of ${Math.ceil(
        carData.carbonEquivalent / 24
      )} trees`
    );

    //Train
    let trainResponse = await fetch(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=NationalTrain&distance=${distance}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key":
            "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
        },
      }
    );
    let trainData = await trainResponse.json();
    console.log(
      `Carbon Emissions by Train: ${
        trainData.carbonEquivalent
      } kg. This is the equivalent of ${Math.ceil(
        trainData.carbonEquivalent / 24
      )} trees`
    );

    //Bus
    let busResponse = await fetch(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=ClassicBus&distance=${distance}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key":
            "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
        },
      }
    );
    let busData = await busResponse.json();
    console.log(
      `Carbon Emissions by Bus: ${
        busData.carbonEquivalent
      } kg. This is the equivalent of ${Math.ceil(
        busData.carbonEquivalent / 24
      )} trees`
    );

    //Taxi
    let taxiResponse = await fetch(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=Taxi&distance=${distance}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key":
            "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
        },
      }
    );
    let taxiData = await taxiResponse.json();
    console.log(
      `Carbon Emissions by Taxi: ${
        taxiData.carbonEquivalent
      } kg. This is the equivalent of ${Math.ceil(
        taxiData.carbonEquivalent / 24
      )} trees`
    );

    //Flight
    let flightResponse = await fetch(
      `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?type=ShortEconomyClassFlight&distance=${distance}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          "x-rapidapi-key":
            "2fa1c0dcdfmshfb82fa2cc944c9ep14832ajsn98e082fa387d",
        },
      }
    );
    let flightData = await flightResponse.json();
    console.log(
      `Carbon Emissions by Air: ${
        flightData.carbonEquivalent
      } kg. This is the equivalent of ${Math.ceil(
        flightData.carbonEquivalent / 24
      )} trees`
    );
  }

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    window.location = "#loading-section";
    setTimeout(() => {
      window.location = "#results-section";
    }, 3000);
    getFootprint();
  };

  return (
    <div className="app">
      {/* to be fixed at the top of the page? */}
      <Menu />
      <SearchSection
        state={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <LoadingSection />
      <ResultsSection />
      {/* button with text to appear as overlay onclick? */}
      <HelpModal />
    </div>
  );
}
