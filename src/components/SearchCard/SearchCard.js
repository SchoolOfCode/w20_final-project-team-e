import { React, useState } from "react";
import Sticky from "react-sticky-el";
import "./SearchCard.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function SearchCard(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <Sticky>
      <GooglePlacesAutocomplete
        selectProps={{
          value1,
          onChange: setValue1,
        }}
      />
      <GooglePlacesAutocomplete
        selectProps={{
          value2,
          onChange: setValue2,
        }}
      />
      <div className="card text-center" id="homescreen">
        <div className="card-body">
          {/* <h2 className="card-title">Calculate Your Journey</h2> */}
          <form className="flex-container">
            <div className="search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Where are you coming from?"
                name="from"
                aria-describedby="from"
                required
                onChange={props.handleChange}
              ></input>
            </div>
            <div className="search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Where are you going to?"
                name="to"
                required
                onChange={props.handleChange}
              ></input>
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
