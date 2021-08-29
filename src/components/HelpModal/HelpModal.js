import React from "react";
import "./HelpModal.css";

export default function HelpModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div>
          <button
            className="modalCloseBtn"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle1">
          <h1>About our Eco Journey Planner</h1>
        </div>
        <div className="modalBody1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="modalTitle2">
          <h1>Creating an account</h1>
        </div>
        <div className="modalBody2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="modalTitle3">
          <h1>Connect with </h1>
        </div>
        <div className="modalBody3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>
  );
}
