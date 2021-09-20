import "./LoadingSection.css";
import carAnimation from "../../images/loading-animation.gif";

export default function LoadingSection(props) {
  // To and From inputs, grabbed from user's search
  let fromLocation = props.from;
  let toLocation = props.to;

  return (
    <div id="loading-section">
      <div className="loading-component-background">
        <div className="loading-component-container">
          <h2 className="loading-component-title">Take a big breath!</h2>
          <div className="loading-component-item">
            <p>
              We're calculating the distance and emissions for your journey from{" "}
              <span className="input-location">{fromLocation}</span> to{" "}
              <span className="input-location">{toLocation}</span>.
            </p>
          </div>
          <div className="car-animation-flex-container">
            <img
              className="car-animation"
              src={carAnimation}
              alt="Car moving through space"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
