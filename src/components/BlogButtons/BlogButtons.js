import React from "react";
import Sticky from "react-sticky-el";
import "./BlogButtons.css";

export default function BlogButtons(props) {
  return (
    <Sticky>
      <div className="card text-center" id="homescreen">
        <div className="card-body">
          <div className="btn-submit">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleSubmit}
            >
              Travel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleSubmit}
            >
              Environment
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleSubmit}
            >
              "Tips & Advice"
            </button>
          </div>
        </div>
      </div>
    </Sticky>
  );
}
