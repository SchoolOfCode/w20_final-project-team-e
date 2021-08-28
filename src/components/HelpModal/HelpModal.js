import React from "react";
{
  /* 
PSUEDO CODE

1. If help button is clicked display a hidden information page & blur homepage background 
2. If help button or close button is clicked hide infomation page & remove blur

STATE NEEDED

- help button 
- close button 

*/
}

export default function HelpModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="modalTitle1"></div>
        <h1>About our Eco Journey Planner</h1>
        <div className="modalBody1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="modalTitle2"></div>
        <h1>Creating an account</h1>
        <div className="modalBody2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="modalTitle3"></div>
        <h1>Connect with </h1>
        <div className="modalBody3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>
  );
}
