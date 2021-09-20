import React from "react";
import "../ResultsSection/ResultsSection.css";
import ResultsCard from '../ResultsCard/ResultsCard';

export default function ResultsSection(props) {

  return (
    <section className="results-container">
      <div className="results-table" id="results-table">
        <ResultsCard 
          formData={props.formData}
          vehicle={props.resultsData[0].vehicle}
          distance={props.resultsData[0].distance}
          carbon={props.resultsData[0].carbon}
          trees={props.resultsData[0].trees}
          icon={props.resultsData[0].icon}
        />
        <ResultsCard 
          formData={props.formData}
          vehicle={props.resultsData[1].vehicle}
          distance={props.resultsData[1].distance}
          carbon={props.resultsData[1].carbon}
          trees={props.resultsData[1].trees}
          icon={props.resultsData[1].icon}
        />
        <ResultsCard 
          formData={props.formData}
          vehicle={props.resultsData[2].vehicle}
          distance={props.resultsData[2].distance}
          carbon={props.resultsData[2].carbon}
          trees={props.resultsData[2].trees}
          icon={props.resultsData[2].icon}
        />
        <ResultsCard 
          formData={props.formData}
          vehicle={props.resultsData[3].vehicle}
          distance={props.resultsData[3].distance}
          carbon={props.resultsData[3].carbon}
          trees={props.resultsData[3].trees}
          icon={props.resultsData[3].icon}
        />
        <ResultsCard 
          formData={props.formData}
          vehicle={props.resultsData[4].vehicle}
          distance={props.resultsData[4].distance}
          carbon={props.resultsData[4].carbon}
          trees={props.resultsData[4].trees}
          icon={props.resultsData[4].icon}
        />
      </div>
    </section>
  );
}
