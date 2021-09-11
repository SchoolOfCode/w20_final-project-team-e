import React from "react";

import "./BlogArticles.css";

export default function BlogArticles(props) {
  return (
    <section>
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
