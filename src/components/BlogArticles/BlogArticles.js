import React from "react";
import EnviroImgArt1 from "../../images/Bower-Collective-Img.jpeg";
import EnviroImgArt2 from "../../images/ecofootprint.png";
import EnviroImgArt3 from "../../images/offset-expo.png";
import TravelImgArt1 from "../../images/environment-plane-travel.png";
import TravelImgArt2 from "../../images/Greener-transport.png";
import TravelImgArt3 from "../../images/uk-car-emissions.webp";
import TipsImgArt1 from "../../images/nula.png";
import TipsImgArt2 from "../../images/worldnomads.png";
import TipsImgArt3 from "../../images/guardian.png";

import "./BlogArticles.css";

export default function BlogArticles(props) {
  return (
    <section>
      <div class="article-card">
        <img
          src={EnviroImgArt1}
          // class="card-img-top"
          alt="grapefruit"
        ></img>
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="article-card">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="article-card">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </section>
  );
}
