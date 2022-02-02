import React from "react";
import { Link } from "react-router-dom";
import "./ChannelSingleList.css";

function ChannelSingleList() {
  return (
    <Link to='/chat-screen/1' className="channel--single--list">
      <div>
        <h2>#</h2>
        <h5>certification_phase</h5>
      </div>
      <div className="count">
        <p>1</p>
      </div>
    </Link>
  );
}

export default ChannelSingleList;
