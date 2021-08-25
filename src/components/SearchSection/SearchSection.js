import React from "react";

import SearchCard from "../SearchCard/SearchCard";
import HeroSection from "../HeroSection/HeroSection";

export default function SearchSection(props) {
  return (
    <div>
      <h1>Search Section Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, autem
        nesciunt. Esse reiciendis, aperiam, minus sed neque dignissimos natus
        illo totam iste labore velit, commodi sit est? Quis, illum. Nihil! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto tenetur
        ex recusandae autem beatae illum esse fugiat id iure necessitatibus,
        sunt reprehenderit, excepturi voluptas et amet perspiciatis. Aliquid,
        earum.
      </p>
      <SearchCard
        state={props.formData}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <HeroSection />
    </div>
  );
}
