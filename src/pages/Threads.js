import React from "react";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import "./Threads.css";

function Threads() {
  return (
    <div className="threads">
      <div className="threads--header">
        <h3>threads</h3>
      </div>
      <div className="threads--content">
        <LocalFloristIcon />
        <h4>Tend to your threads</h4>
        <p>Threads you’re involved in will be collected right here.</p>
        <p>Learn about threads</p>
      </div>
    </div>
  );
}

export default Threads;
