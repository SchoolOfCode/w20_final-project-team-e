import { useState } from "react";
import React from "react";
import "./App.css";

import SearchSection from "../SearchSection/SearchSection";
import HeroSection from "../HeroSection/HeroSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import Menu from "../Menu/Menu";
import HelpModal from "../HelpModal/HelpModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      {/* to be fixed at the top of the page? */}
      <Menu />
      <HeroSection />
      <SearchSection />
      <LoadingSection />
      <ResultsSection />
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Help?
      </button>
      {openModal && <HelpModal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
