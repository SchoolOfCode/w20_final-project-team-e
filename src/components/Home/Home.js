import React from "react";

import Menu from "../Menu/Menu";
import Sticky from "react-sticky-el";
import HeroSection from "../HeroSection/HeroSection";
import SearchSection from "../SearchSection/SearchSection";
import LoadingSection from "../LoadingSection/LoadingSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import HelpModal from "../HelpModal/HelpModal";
import Footer from "../Footer/Footer";

export default function Home(props) {
  return (
    <div className="home">
      {/* to be fixed at the top of the page? */}
      <Sticky>
        <Menu />
      </Sticky>
      <HeroSection />
      <SearchSection
        from={props.from}
        to={props.to}
        handleFrom={props.handleFrom}
        handleTo={props.handleTo}
        handleSubmit={props.handleSubmit}
      />
      {props.showLoadingComponent ? (
        <LoadingSection from={props.from} to={props.to} />
      ) : null}
      {props.displayResults ? (
        <ResultsSection
          from={props.from}
          to={props.to}
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
      <Footer />
    </div>
  );
}
