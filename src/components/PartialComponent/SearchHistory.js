import React from "react";
import "./SearchHistory.css";

function SearchHistory({setSearchHistory}) {

  const closeSearchHistoryContainer = (e) => {
    if(e.target.classList.contains('search--historyContainer')) setSearchHistory(false)
  }  


  return (
    <div className="search--historyContainer" onClick={(e) => closeSearchHistoryContainer(e)}>
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
