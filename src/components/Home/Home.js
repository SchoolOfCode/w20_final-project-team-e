import React from "react";

import Menu from "../Menu/Menu";
import Sticky from "react-sticky-el";
import HeroSection from "../HeroSection/HeroSection";
import SearchSection from "../SearchSection/SearchSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import HelpModal from "../HelpModal/HelpModal";

export default function Home(props) {
  return (
    <div className="home">
      {/* to be fixed at the top of the page? */}
      <Sticky>
        <Menu />
      </Sticky>
      <HeroSection />
      <SearchSection
        formData={props.formData}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      {props.showLoadingComponent ? (
        <LoadingSection formData={props.formData} />
      ) : null}
      {props.displayResults ? (
        <ResultsSection
          formData={props.formData}
          resultsData={props.resultsData}
        />
      ) : null}
      <button
        className={props.openModal ? "closeModalBtn" : "openModalBtn"}
        onClick={() => {
          props.setOpenModal(!props.openModal);
        }}
      >
        ?
      </button>
      {props.openModal && <HelpModal closeModal={props.setOpenModal} />}
    </div>
  );
}
