import React from "react";
import "./ChatScreenHeader.css";

import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";

function ChatScreenHeader({ showChatDetails }) {
  return (
    <>
      <div className="chatscreen--topic--left">
        <div className="chatscreen--topic--left--top">
          <h4>#certification_phase</h4>
          <div className="chatscreen--star">
            <StarBorderRoundedIcon />
          </div>
        </div>
        <div className="chatscreen--topic--left--bottom">
          <div className="pinned--text">
            <PinDropOutlinedIcon />
            <p>1</p>
          </div>
          <h4>Add a topic</h4>
        </div>
      </div>
      <div className="chatscreen--topic--right">
        <div className="list--chat--persons">
          <div>
            <AccountBoxOutlinedIcon />
          </div>
          <div>
            <AccountBoxOutlinedIcon />
          </div>
          <div>
            <AccountBoxOutlinedIcon />
          </div>
          <p>2,000</p>
        </div>
        <div className="profile--invite">
          <PersonAddOutlinedIcon />
        </div>
        <div className="info" onClick={showChatDetails}>
          <InfoOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default ChatScreenHeader;
