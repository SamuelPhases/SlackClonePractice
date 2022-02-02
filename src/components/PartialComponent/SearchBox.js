import React from "react";
import "./SearchBox.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function SearchBox({ setOpenSearch }) {

  
  const closeSearchBoxContainer = (e) => {
    if(e.target.classList.contains('search--box--container')) setOpenSearch(false)
  }  


  return (
    <div className="search--box--container" onClick={(e) => closeSearchBoxContainer(e)}>
      <div className="search--box">
        <div className="search--box--header">
          <div>
            <SearchIcon />
          </div>
          <input type="text" placeholder="You're digging in the right place" />
          <div
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="search--box--body">
          <div className="search--box--body--header">
            <EmojiObjectsIcon />
            <h3>Search messages, files, and more</h3>
          </div>
          <div className="search--box--body--content">
            <p>Looking for a particular message, doc, or decision?</p>
            <p>If it happened in Slack, you can find it in search.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
