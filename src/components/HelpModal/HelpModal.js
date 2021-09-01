import React from "react";
import "./HelpModal.css";
import helpModalImage from "../../images/help_modal_illustration.png";

export default function HelpModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div>
          <button
            className="modalCloseBtn"
            onClick={() => {
              closeModal(false);
              enableBodyScroll(targetElement);
            }}
          >
            x
          </button>
        </div> */}
        <div className="modalText">
          <div className="modalTitle1">
            <h2>About our Eco Journey Planner</h2>
          </div>
          <div className="modalBody1">
            <p>
              Emission Impossible is on a journey to help make emissions
              impossible. We’ll help you get better informed about your
              journey’s environmental impact, routes and modes of transport that
              can help cut down on emissions or ways to offset your carbon
              quota. Pop in where you want to go and we’ll help you plan a
              greener route!{" "}
            </p>
          </div>
          <div className="modalTitle2">
            <h2>Creating an account</h2>
          </div>
          <div className="modalBody2">
            <p>
              Creating an account helps you track your routes and get better
              informed about the shoe size of carbon footprint over time.{" "}
            </p>
          </div>
          <div className="modalTitle3">
            <h2>Connect with others</h2>
          </div>
          <div className="modalBody3">
            <p>
              Tackling the dilemmas around the environment can often feel like a
              solo slog. Connect with our community of eco journey planners,
              asking questions, finding solutions and plotting a greener route
              for the future.{" "}
            </p>
          </div>
        </div>
        <div className="modalImage">
          <img src={helpModalImage} alt="lady with suitcase"></img>
        </div>
      </div>
    </div>
  );
}
