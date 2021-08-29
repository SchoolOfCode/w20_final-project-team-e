import React from "react";
import SearchCard from "../SearchCard/SearchCard";

export default function SearchSection(props) {
  
  return (
    <div id="search-section">
      <SearchCard
        state={props.formData}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
}
