import React from "react";
import "./ChatScreenMessage.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ReplyIcon from '@material-ui/icons/Reply';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import PinDropRoundedIcon from '@material-ui/icons/PinDropRounded';


function ChatScreenMessage({ displayName, time, message, switchTextToggler }) {
  return (
    <div className="chatscreenmessage">
      {!switchTextToggler ? (
        <>
          <div className="chat--message--switch">
            <p className="time--switch">{time}</p>
            <h4 className="name--switch">{displayName}</h4>
            <p className="message--switch">{message}</p>
          </div>
        </>
      ) : (
        <>
          <div className="chat--message--left">
            <AccountBoxIcon />
          </div>
          <div className="chat--message--right">
            <div className="chat--message--top">
              <h4>{displayName}</h4>
              <p>{time}</p>
            </div>
            <p>{message}</p>
            </div>
            <div className='chat--message--icons'>
              {/* reply */}
              <div>
              <ReplyIcon/>
              </div>
              {/* save */}
              <div>
              <BookmarkBorderRoundedIcon/>
              </div>

              {/* pin to channel */}
              <div>
              <PinDropRoundedIcon />
              </div>
            </div>
        </>
      )}
    </div>
  );
}

export default ChatScreenMessage;
