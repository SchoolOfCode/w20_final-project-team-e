import { React } from "react";
import Sticky from "react-sticky-el";
import "./SearchCard.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function SearchCard(props) {
  return (
    <Sticky>
      <div className="card text-center" id="homescreen">
        <div className="card-body">
          <form className="flex-container">
            <div className="search-input">
              {/* Logic for search autocomplete - takes in react-select props */}
              <GooglePlacesAutocomplete
                selectProps={{
                  menuPlacement: "auto",
                  className: "form-control",
                  onChange: props.handleFrom,
                  placeholder: "Where are you coming from?",
                  styles: {
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused && "#ff7c5b",
                      color: state.isFocused && "white",
                    }),
                    control: (provided, state) => ({
                      ...provided,
                      border: state.isFocused ? 0 : 0,
                      // This line disables the blue border
                      boxShadow: state.isFocused ? 0 : 0,
                      "&:hover": {
                        border: state.isFocused ? 0 : 0,
                      },
                    }),
                  },
                }}
                type="text"
                name="from"
                aria-describedby="from"
                required
              />
            </div>
            <div className="search-input">
              <GooglePlacesAutocomplete
                selectProps={{
                  menuPlacement: "auto",
                  className: "form-control",
                  onChange: props.handleTo,
                  placeholder: "Where are you going to?",
                  styles: {
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused && "#ff7c5b",
                      color: state.isFocused && "white",
                    }),
                    control: (provided, state) => ({
                      ...provided,
                      border: state.isFocused ? 0 : 0,
                      // This line disables the blue border
                      boxShadow: state.isFocused ? 0 : 0,
                      "&:hover": {
                        border: state.isFocused ? 0 : 0,
                      },
                    }),
                  },
                }}
                type="text"
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
