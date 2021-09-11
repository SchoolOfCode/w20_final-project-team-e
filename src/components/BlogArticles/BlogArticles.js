import React from "react";

import "./BlogArticles.css";
import ecofootprint from "../../images/ArticleImages/ecofootprint.PNG";

export default function BlogArticles(props) {
  return (
    <section>
      <div class="article-card">
        <a
          href="https://www.footprintcalculator.org/home/en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ecofootprint} class="card-img-top" alt="text"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </div>
      <div class="article-card">
        <a
          href="https://bowercollective.com/pages/waste-calculator#intro"
          target="_blank"
          rel="noreferrer"
        >
          <img src="..." class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </div>

      <div class="article-card">
        <a
          href="https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions"
          target="_blank"
          rel="noreferrer"
        >
          <img src="..." class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
