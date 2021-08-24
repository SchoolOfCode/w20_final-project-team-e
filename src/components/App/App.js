import React from "react";
import "./App.css";

import SearchSection from "../SearchSection/SearchSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import Menu from "../Menu/Menu";
import HelpModal from "../HelpModal/HelpModal";

function App() {
  return (
    <div className="app">
      {/* to be fixed at the top of the page? */}
      <Menu />
      <SearchSection />
      <LoadingSection />
      <ResultsSection />
      <button></button>
      <HelpModal />
    </div>
  );
}

export default App;
