import React from "react";

export default function SearchCard(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Calculate Your Journey</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <input
              type="text"
              className="form-control"
              name="from"
              aria-describedby="from"
              onChange={props.handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <input
              type="text"
              className="form-control"
              name="to"
              onChange={props.handleChange}
            ></input>
          </div>
          {/*         
onclick of this button, run loading page for a few seconds, then load results page */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};