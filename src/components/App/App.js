import React from "react";
import "./App.css";
import { useState } from "react";

import SearchSection from "../SearchSection/SearchSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import Menu from "../Menu/Menu";
import HelpModal from "../HelpModal/HelpModal";

export default function App() {
  const initialFormData = {
    from: "",
    to: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  const key = "2Ms4naKG2GfSDZTrwZCG35OhUu0pI";
  async function getDistance() {
    let response = await fetch(
      `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${formData.from}&destinations=${formData.to}&key=${key}`
    );
    let data = await response.json();
    console.log(`Your Journey is: ${data.rows[0].elements[0].distance.text}`);
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
    getDistance();
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
