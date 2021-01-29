import React, { useState } from "react";
import "./ChatScreen.css";

import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import TransformOutlinedIcon from "@material-ui/icons/TransformOutlined";

import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";

import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";

import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ChatScreenMessage from "./ChatScreenMessage";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatDetail from "./ChatDetail";

function ChatScreen() {
  const [hideEdit, setHideEdit] = useState(true);
  // const [switchTextTogglerBlock, setSwitchTextTogglerBlock] = useState(false);

  const [chatDetails, setChatDetails] = useState(false);

  const showChatDetails = () => {
    setChatDetails(!chatDetails);
  };

  return (
    <>
      <div className={`chatscreen ${chatDetails && "chatscreen--details"} `}>
        <div className="chatscreen--topic">
          <ChatScreenHeader showChatDetails={showChatDetails} />
        </div>
        <div className="chatscreen--body">
          
          <ChatScreenMessage
            displayName={"Brian Lorem"}
            time={"2:08 am"}
            message={"Hi"}
            switchTextToggler={true}
            // setSwitchTextTogglerBlock={switchTextToggler}  REDUX
          />
          <ChatScreenMessage
            displayName={"Brian Lorem"}
            time={"2:08 am"}
            message={"Hi"}
            switchTextToggler={true}
            // setSwitchTextTogglerBlock={switchTextToggler}  REDUX
          />
          <ChatScreenMessage
            displayName={"Brian Lorem"}
            time={"2:08 am"}
            message={"Hi"}
            switchTextToggler={true}
            // setSwitchTextTogglerBlock={switchTextToggler}  REDUX
          />
        </div>
        <form className={`chatscreen--input ${!hideEdit && "chat--resize"}`}>
          {/* <div className='chatscreen--input--split'> */}
          <textarea placeholder="Type your message here" />
          {/* <input type="text" placeholder="Type your message here" /> */}

          {/* </div> */}
          <div className="chatscreen--input--edit">
            <div className="chatscreen--input--edit--left">
              <p className="bold--edit">B</p>
              <p className="italic--edit">I</p>
              <p className="link--edit">L</p>
              <p className="list--edit">
                <FormatListBulletedOutlinedIcon />
              </p>
            </div>

            <div className="chatscreen--input--edit--right">
              <div
                className="hide--edit"
                onClick={() => {
                  setHideEdit(!hideEdit);
                }}
              >
                <TransformOutlinedIcon />
              </div>
              <div className="email--edit">
                <AlternateEmailOutlinedIcon />
              </div>
              <div className="attach--edit">
                <AttachFileOutlinedIcon />
              </div>
              <div className="send--btn">
                <SendOutlinedIcon />
              </div>
            </div>
          </div>
        </form>
      </div>
      {chatDetails && (
        <div className="chatscreen--container">
          <ChatDetail showChatDetails={showChatDetails} />
          <div className="chatscreen ">
            <div className="chatscreen--topic">
              <ChatScreenHeader showChatDetails={showChatDetails} />
            </div>
            <div className="chatscreen--body">
              <ChatScreenMessage
                displayName={"Brian Lorem"}
                time={"2:08 am"}
                message={"Hi"}
                // setSwitchTextTogglerBlock={switchTextToggler}  REDUX
              />
            </div>
            <form
              className={`chatscreen--input ${!hideEdit && "chat--resize"}`}
            >
              {/* <div className='chatscreen--input--split'> */}
              <textarea placeholder="Type your message here" />
              {/* <input type="text" placeholder="Type your message here" /> */}

              {/* </div> */}
              <div className="chatscreen--input--edit">
                <div className="chatscreen--input--edit--left">
                  <p className="bold--edit">B</p>
                  <p className="italic--edit">I</p>
                  <p className="link--edit">L</p>
                  <p className="list--edit">
                    <FormatListBulletedOutlinedIcon />
                  </p>
                </div>

                <div className="chatscreen--input--edit--right">
                  <div
                    className="hide--edit"
                    onClick={() => {
                      setHideEdit(!hideEdit);
                    }}
                  >
                    <TransformOutlinedIcon />
                  </div>
                  <div className="email--edit">
                    <AlternateEmailOutlinedIcon />
                  </div>
                  <div className="attach--edit">
                    <AttachFileOutlinedIcon />
                  </div>
                  <div className="send--btn">
                    <SendOutlinedIcon />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatScreen;
