import React from "react";
import EnviroImgArt1 from "../../images/ArticleImages/ecofootprint.PNG";
import EnviroImgArt2 from "../../images/ArticleImages/plastic-calc-site.jpeg";
import EnviroImgArt3 from "../../images/ArticleImages/offsetting-expo.png";
import TravelImgArt1 from "../../images/ArticleImages/environment-plane-travel.png";
import TravelImgArt2 from "../../images/ArticleImages/greener-transport.png";
import TravelImgArt3 from "../../images/ArticleImages/uk-car-emissions.webp";
import TipsImgArt1 from "../../images/ArticleImages/nula.png";
import TipsImgArt2 from "../../images/ArticleImages/eco-travel-tips.jpeg";
import TipsImgArt3 from "../../images/ArticleImages/guardian.png";

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

      <div class="article-card">
        <img
          src={TravelImgArt1}
          class="card-img-top"
          alt="white plane landing on grey runway in"
        ></img>
        <div class="card-body">
          <a
            href="https://www.worldnomads.com/responsible-travel/make-a-difference/planet/your-guide-to-greener-air-travel"
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
          src={TravelImgArt2}
          class="card-img-top"
          alt="cycle path in a woodland, 1 person on a bicycle and 2 on a side-by-side tandem"
        ></img>
        <div class="card-body">
          <a
            href="https://www.conserve-energy-future.com/modes-and-benefits-of-green-transportation.php"
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
          src={TravelImgArt3}
          class="card-img-top"
          alt="picture of electric car chargring port and back light"
        ></img>
        <div class="card-body">
          <a
            href="https://www.environmental-protection.org.uk/policy-areas/air-quality/air-pollution-and-transport/car-pollution/"
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
        <img src={TipsImgArt1} class="card-img-top" alt="Nula logo"></img>
        <div class="card-body">
          <a
            href="https://www.nulacarbon.com/about"
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
          src={TipsImgArt2}
          class="card-img-top"
          alt="2 people at a colourful fruit and market stall"
        ></img>
        <div class="card-body">
          <a
            href="https://www.worldnomads.com/responsible-travel/make-a-difference/planet/top-10-tips-for-environmentally-friendly-travel"
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
          src={TipsImgArt3}
          class="card-img-top"
          alt="Tree made from recyled materials on yellow background"
        ></img>
        <div class="card-body">
          <a
            href="https://www.theguardian.com/environment/2020/feb/29/50-ways-to-green-up-your-life-save-the-planet"
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
