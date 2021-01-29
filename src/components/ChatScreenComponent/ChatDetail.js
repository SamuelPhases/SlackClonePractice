import React, { useState } from "react";
import "./ChatDetail.css";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import ChatScreenMessage from "./ChatScreenMessage";

function ChatDetail({ showChatDetails }) {
  const [chatAbout, setChatAbout] = useState(false);
  const [chatMember, setChatMember] = useState(false);
  const [chatPinned, setChatPinned] = useState(false);
  return (
    <div className="chat--detailContainer">
      <div className="chat--detailContent">
        <div className="chat--detailHeader">
          <div>
            <h3>Details</h3>
            <p># certification_phase</p>
          </div>
          <div onClick={showChatDetails}>
            <CloseIcon />
          </div>
        </div>
        <div className="chat--detailBody">
          <div
            onClick={() => {
              setChatAbout(!chatAbout);
            }}
          >
            <h4>About</h4>
            {chatAbout ? (
              <ExpandMoreRoundedIcon />
            ) : (
              <ChevronRightRoundedIcon />
              //   <ArrowForwardIosRoundedIcon />
            )}
          </div>
          {chatAbout && (
            <div className="chat--detailAbout">
              <div className="chat--detailAboutTopic">
                <p>Topic</p>
                <h3>React</h3>
                <p>Edit</p>
              </div>
              <div className="chat--detailAboutDescription">
                <p>Description</p>
                <h3>Yes, GLORY HALLELUJAH</h3>
                <p>Edit</p>
              </div>
              <div className="chat--detailAboutProfile">
                <div className="pic"></div>
                <p>Created on October 6, 2020</p>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setChatMember(!chatMember);
            }}
          >
            <h4>Members</h4>
            {chatMember ? (
              <ExpandMoreRoundedIcon />
            ) : (
              <ChevronRightRoundedIcon />
              //   <ArrowForwardIosRoundedIcon />
            )}
          </div>
          {chatMember && (
            <div className="chat--detailMembers">
              <div>
                <div></div>
                <h3>Lore Clean</h3>
                <FiberManualRecordIcon />
                <p>Be Good</p>
              </div>
              <div>
                <div></div>
                <h3>Lore Clean</h3>
                <FiberManualRecordOutlinedIcon />

                <p>Be Good</p>
              </div>
              <button>See All 900,000 Members</button>
            </div>
          )}
          <div className="chat--detailShortcut">
            <h4>Shortcut</h4>
            <ChevronRightRoundedIcon/>
          </div>
          <div
            onClick={() => {
              setChatPinned(!chatPinned);
            }}
          >
            <h4>Pinned</h4>
            {chatPinned ? (
              <ExpandMoreRoundedIcon />
            ) : (
              <ChevronRightRoundedIcon />
              //   <ArrowForwardIosRoundedIcon />
            )}
          </div>
          {chatPinned && (
            <div className="chat--detailPinned">
              <div className="chat--detailPinnedmessage">
                <div className="chat--detailPinnedHeader">
                  <div>
                    <div className="pic"></div>
                    <h3>Col Lore</h3>
                  </div>
                  <CloseIcon />
                </div>
                <p>Hey,yo everyone</p>
                <div className="chat--detailPinnedFooter">
                  <div>
                    <CommentRoundedIcon />
                    <p>10 replies</p>
                  </div>
                  <div>
                    <p>Oct 10th</p>
                    <p>View message</p>
                  </div>
                </div>
              </div>
              <div className="chat--detailPinnedmessage">
                <div className="chat--detailPinnedHeader">
                  <div>
                    <div className="pic"></div>
                    <h3>Col Lore</h3>
                  </div>
                  <CloseIcon />
                </div>
                <p>Hey,yo everyone</p>
                <div className="chat--detailPinnedFooter">
                  <div>
                    <CommentRoundedIcon />
                    <p>10 replies</p>
                  </div>
                  <div>
                    <p>Oct 10th</p>
                    <p>View message</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="chat--detailFiles">
            <h4>Files</h4>
            <ChevronRightRoundedIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDetail;
