import React from "react";

import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";

import "./ViewProfile.css";

function ViewProfile({ activeAway, editFromViewProfile, closeViewProfile, setShowViewProfile }) {

  const closeProfileView = (e) => {
    if(e.target.classList.contains('profile--view--container')) closeViewProfile()
    // console.log(123)
  }

  return (
    <div className="profile--view--container" onClick={(e) => closeProfileView(e)}>
      <div className="profile--view--content">
        <div className="profile--view--header">
          <h3>Profile</h3>
          <div className="close--icon" onClick={closeViewProfile}>
            <CloseIcon />
          </div>
        </div>
        <div className="profile--view--body">
          <div className="profile--view--display">
            <PersonRoundedIcon />
            <div>
              <h3>Lorem Brian</h3>
              {activeAway ? (
                <FiberManualRecordIcon />
              ) : (
                <FiberManualRecordOutlinedIcon />
              )}
            </div>
            <p>Data Storytelling </p>

            <div className="profile--view--icons">
              <div>
                <div>
                  <SentimentSatisfiedRoundedIcon />
                </div>
                <p>Set status</p>
              </div>
              <div onClick={editFromViewProfile}>
                <div>
                  <CreateRoundedIcon />
                </div>
                <p>Edit profile</p>
              </div>
              <div>
                <div>
                  <MoreHorizRoundedIcon />
                </div>
                <p>more</p>
              </div>
            </div>
          </div>
          <div className="profile--view--info">
            <div>
              <p>Display name</p>
              <h3>Lorem Brian</h3>
            </div>
            <div>
              <p>Local time</p>
              <h3>1:30 Am</h3>
            </div>
            <div>
              <p>Phone number</p>
              <h3>019283890</h3>
            </div>
            <div>
              <p>Email address</p>
              <h3>lorembrian@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
