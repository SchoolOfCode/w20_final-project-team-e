import { React } from "react";
import Sticky from "react-sticky-el";
import "./SearchCard.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function SearchCard(props) {
  return (
    <Sticky>
      <div className="card text-center" id="homescreen">
        <div className="card-body">
          {/* <h2 className="card-title">Calculate Your Journey</h2> */}
          <form className="flex-container">
            <div className="search-input">
              <GooglePlacesAutocomplete
                selectProps={{
                  onChange: props.handleFrom,
                }}
                type="text"
                className="form-control"
                placeholder="Where are you coming from?"
                name="from"
                aria-describedby="from"
                required
              />
            </div>
            <div className="search-input">
              <GooglePlacesAutocomplete
                selectProps={{
                  onChange: props.handleTo,
                }}
                type="text"
                className="form-control"
                placeholder="Where are you going to?"
                name="to"
                required
                onChange={props.handleChange}
              />
            </div>
            {/*onlcick of this button, run loading page for a few seconds, then load results page */}
            <div className="btn-submit">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={props.handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </Sticky>
  );
}
