import React from "react";

export default function SearchCard() {
  return (
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Calculate Your Journey</h5>
        <form>
          <div class="mb-3">
            <label for="from" class="form-label">
              From:
            </label>
            <input
              type="text"
              class="form-control"
              id="from"
              aria-describedby="from"
            ></input>
          </div>
          <div class="mb-3">
            <label for="to" class="form-label">
              To:
            </label>
            <input type="text" class="form-control" id="to"></input>
          </div>
          {/*         
onlcick of this button, run loading page for a few seconds, then load results page */}
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
