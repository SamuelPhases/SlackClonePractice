import React from "react";
import "./SearchHistory.css";

function SearchHistory() {
  return (
    <div className="search--historyContainer">
      <div className="search--historyContent">
        <p>Recent</p>
        <div className="search--historyList">
          <div>
            <h3># </h3>
            <h3>general</h3>
          </div>
          <div>
            <h3># </h3>
            <h3>feedback</h3>
          </div>
          <div>
            <h3># </h3>
            <h3>certification_phase</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHistory;
