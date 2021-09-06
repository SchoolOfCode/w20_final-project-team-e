import { useEffect } from "react";
import "./LoadingSection.css";
import progressIcon from "../../images/loading-icon.gif";
import completedIcon from "../../images/tick-icon.png";
import carAnimation from "../../images/loading-animation.gif"

export default function LoadingSection(props) {

  // To and From inputs, grabbed from user's search
  let fromLocation = props.formData.from;
  let toLocation = props.formData.to;

  // Object containing information on the page.
  let loadingInfo = {
    comment: {
      empty: "",
      carbon: "We're converting those carbon emissions into their equivalency in electricity",
      trees: "We're checking how many trees are needed to offset those carbon emissions",
    },
  }

  // Declaration of icon locations
  let iconStatus = [
    progressIcon,
    progressIcon,
    progressIcon,
  ]

  // Hook used to change data on the loading component after a set amount of time.
  useEffect(() => {
    console.log("This is the start of the timer");
    setTimeout(() => {
      console.log("1.5 seconds");
    }, 1500);
  
    setTimeout(() => {
      console.log("3 seconds");
    }, 3000);
  
    setTimeout(() => {
      console.log("4.5 seconds");
    }, 4500);
  }, []); // Empty array makes the useEffect hook run only once.

  return (
    <div id="loading-section">
      <div className="loading-component-background">
        <div className="loading-component-container">
          <h2 className="loading-component-title">Take a big breath!</h2>
          <div className="loading-component-item">
          <p><img className="loading-component-icon" src={iconStatus[0]} alt="Calculation complete icon"/>We're calculating the distance from <span className="input-location">{fromLocation}</span> to <span className="input-location">{toLocation}</span>.</p>
          </div>
          <div className="loading-component-item">
            <p><img className="loading-component-icon" src={iconStatus[1]} alt="Calculation complete icon"/>{loadingInfo.comment.carbon}</p>
          </div>
          <div className="loading-component-item">
            <p><img className="loading-component-icon" src={iconStatus[2]} alt="Calculation in progress icon"/>{loadingInfo.comment.trees}</p>
          </div>
          <div className="car-animation-flex-container">
            <img className="car-animation" src={carAnimation} alt="Car moving through space" />
          </div>
        </div>
      </div>
    </div>
  );
}
 