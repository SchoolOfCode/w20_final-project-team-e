import React from "react";
import EnviroImgArt1 from "../../images/ArticleImages/ecofootprint.PNG";
import EnviroImgArt2 from "../../images/ArticleImages/plastic-calc-site.jpeg";
import EnviroImgArt3 from "../../images/ArticleImages/offsetting-expo.png";
// import TravelImgArt1 from "../../images/ArticleImages/environment-plane-travel.png";
// import TravelImgArt2 from "../../images/ArticleImages/greener-transport.png";
// import TravelImgArt3 from "../../images/ArticleImages/uk-car-emissions.webp";
// import TipsImgArt1 from "../../images/ArticleImages/nula.png";
// import TipsImgArt2 from "../../images/ArticleImages/worldnomads.png";
// import TipsImgArt3 from "../../images/ArticleImages/guardian.png";

import "./BlogArticles.css";

export default function BlogArticles(props) {
  return (
    <section>
      <div class="article-card">
        <img
          src={EnviroImgArt1}
          // class="card-img-top"
          alt="illustrated landscape with trees"
        ></img>
        <div class="card-body">
          <a
            href="https://www.footprintcalculator.org/home/en"
            target="_blank"
            rel="noreferrer"
          >
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </a>
        </div>
      </div>
      <div class="article-card">
        <img
          src={EnviroImgArt2}
          class="card-img-top"
          alt="sliced grapefruit, cacti and plastic bottles"
        ></img>
        <div class="card-body">
          <a
            href="https://bowercollective.com/pages/waste-calculator#intro"
            target="_blank"
            rel="noreferrer"
          >
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </a>
        </div>
      </div>
      <div class="article-card">
        <img
          src={EnviroImgArt3}
          class="card-img-top"
          alt=" colourful collage of pics of waste, factories with emissions"
        ></img>
        <div class="card-body">
          <a
            href="https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions"
            target="_blank"
            rel="noreferrer"
          >
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
