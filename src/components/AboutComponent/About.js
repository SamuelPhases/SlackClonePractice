import React from "react";
import "./About.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function About({ setAbout, setShowAdmin }) {
  return (
    <div className="about--container">
      <div className="about--content">
        <div className="about--contentHeader">
          <div className="about--contentLogo"></div>
          <div className="about--contentTitle">
            <h2>ALC 4 Hamoye</h2>
            <p>Keep working</p>
          </div>
        </div>
        <div className="about--contentInfo">
          <p>Your workspace is currently on the free version.See plans</p>
        </div>
        <div className="about--contentInfo">
          <h2>Invite people to the ALC 4 H...</h2>
        </div>
        <div className="about--contentInfo">
          <h2>Customize ALC 4 Hamoye</h2>
        </div>
        <div className="about--contentInfo">
          <h2>Sign Out</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
