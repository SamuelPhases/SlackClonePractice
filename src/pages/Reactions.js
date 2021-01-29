import React, { useState } from "react";
import "./Reactions.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import SwapCallsIcon from "@material-ui/icons/SwapCalls";
import ChatScreen from "../components/ChatScreenComponent/ChatScreen";
import CloseIcon from "@material-ui/icons/Close";

function Reactions() {
  const [reactionChatScreen, setReactionChatScreen] = useState(true);
  const [closeReaction, setCloseReaction] = useState(false);

  return (
    <div className="reaction--tab--split">
      <div
        className={`reaction ${reactionChatScreen && "fullscreen--reaction"} ${
          closeReaction && "hide--reaction--fullscreen"
        }`}
      >
        <div className="reaction--content">
          <div className="reaction--header">
            <h3>mentions & reactions</h3>
            <div>
              <div
                onClick={() => {
                  setReactionChatScreen(!reactionChatScreen);
                }}
              >
                <SwapCallsIcon />
              </div>
              {!reactionChatScreen && (
                <div
                  onClick={() => {
                    setCloseReaction(true);
                  }}
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          </div>
          <div className="reaction--body">
            <AlternateEmailIcon />
            <h3>See new activity in real time</h3>
            <p>
              When people react to your messages or mention you or your
              keywords, you’ll see it here.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`reaction--chatscreen ${
          reactionChatScreen && "hide--chatscreen"
        } ${closeReaction && "close--chat--screen--reaction"}`}
      >
        <ChatScreen />
      </div>
    </div>
  );
}

export default Reactions;
