import React from "react";
import "./AllDms.css";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function AllDms() {
  return (
    <div className="all--dms">
      <div className="all--dmsHeader">
        <div>
          <h3>All direct messages</h3>
        </div>
        <div>
          <p>To:</p>
          <input type="text" placeholder="Type the name of a person" />
        </div>
      </div>
      <div className="all--dmsBody">
        <div>
          <EmojiObjectsIcon />
          <h3>Keep track of your conversations with teammates</h3>
        </div>
        <p>
          You'll see a list of all your direct messages here - with the latest
          messages at the top, so you can tell what's new at a glance.
        </p>
      </div>
    </div>
  );
}

export default AllDms;
