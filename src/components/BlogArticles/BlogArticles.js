import React from "react";
import EnviroImgArt1 from "../../images/ArticleImages/Bower-Collective-Img.jpeg";
import EnviroImgArt2 from "../../images/ArticleImages/ecofootprint.PNG";
import EnviroImgArt3 from "../../images/ArticleImages/offsetting-expo.png";
import TravelImgArt1 from "../../images/ArticleImages/environment-plane-travel.png";
import TravelImgArt2 from "../../images/ArticleImages/Greener-transport.png";
import TravelImgArt3 from "../../images/ArticleImages/uk-car-emissions.webp";
import TipsImgArt1 from "../../images/ArticleImages/nula.png";
import TipsImgArt2 from "../../images/ArticleImages/worldnomads.jpg";
import TipsImgArt3 from "../../images/ArticleImages/guardian.png";
import "./BlogArticles.css";

export default function BlogArticles(props) {
  return (
    <section>
      <div class="article-card">
        <a
          href="https://www.footprintcalculator.org/home/en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EnviroImgArt1} class="card-img-top" alt="text"></img>
          <div class="card-body">
            <p class="card-text">Card 1 text</p>
          </div>
        </a>
      </div>
      <div class="article-card">
        <a
          href="https://bowercollective.com/pages/waste-calculator#intro"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EnviroImgArt2} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">card 2 text</p>
          </div>
        </a>
      </div>

      <div class="article-card">
        <a
          href="https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EnviroImgArt3} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">card 3</p>
          </div>
        </a>
      </div>

      <div class="article-card">
        <a
          href="https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EnviroImgArt3} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">card 3</p>
          </div>
        </a>
      </div>
    </section>
  );
}
