import React from "react";
import "./HelpModal.css";
import helpModalImage from "../../images/help_modal_illustration.png";

export default function HelpModal(props) {
  return (
    <div
      //close help modal on click of background
      className="modalBackground"
      onClick={() => {
        props.closeModal(false);
      }}
    >
      <div className="modalContainer">
        <div className="modalText">
          <h2>About our Eco Journey Planner</h2>
          <p>
            Emission Impossible is on a journey to help make emissions
            impossible. We’ll help you get better informed about your journey’s
            environmental impact, routes and modes of transport that can help
            cut down on emissions or ways to offset your carbon quota. Pop in
            where you want to go and we’ll help you plan a greener route.
          </p>
          <h2>Want to learn more?</h2>
          <p>
            Tackling the dilemmas around the environment can often "where do I
            start?". Flick through our blog for some easy tips and advice to get
            started on your journey to zero emissions.
          </p>
        </div>
        <img
          className="modalImage"
          src={helpModalImage}
          alt="lady with suitcase"
        ></img>
      </div>
    </div>
  );
}
