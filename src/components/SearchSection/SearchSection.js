import React from "react";

import SearchCard from "../SearchCard/SearchCard";
import HeroSection from "../HeroSection/HeroSection";

export default function SearchSection() {
  return (
    <div id="search-section">
      <h1>Search Section Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit
        corrupti corporis nihil quae amet ipsa quo quaerat rerum, numquam cum
        saepe modi in obcaecati debitis necessitatibus minus aspernatur illum.
      </p>
      <SearchCard />
      <HeroSection />
    </div>
  );
}
