import React from "react";
import SearchCard from "../SearchCard/SearchCard";

export default function SearchSection(props) {
  return (
    <div>
      <SearchCard
        from={props.from}
        to={props.to}
        handleFrom={props.handleFrom}
        handleTo={props.handleTo}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
}
