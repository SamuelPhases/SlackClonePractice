import React, { useState } from "react";
import "./SavedItems.css";

import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";

import CloseIcon from "@material-ui/icons/Close";
import SwapCallsIcon from "@material-ui/icons/SwapCalls";
import ChatScreen from "../components/ChatScreenComponent/ChatScreen";

function SavedItems() {
  const [savedIChatScreen, setSavedIChatScreen] = useState(true);
  const [closeSavedItems, setCloseSavedItems] = useState(false);

  return (
    <div className="savedItems--tab--split">
      <div
        className={`savedI ${savedIChatScreen && "fullscreen--savedI"} ${
          closeSavedItems && "close--saved--items"
        }`}
      >
        <div className="savedI--Content">
          <div className="savedI--Header">
            <h3>Saved items</h3>
            <div className="saved--icon--split">
              <div
                onClick={() => {
                  setSavedIChatScreen(!savedIChatScreen);
                }}
              >
                <SwapCallsIcon />
              </div>
              {!savedIChatScreen && (
                <div
                  onClick={() => {
                    setCloseSavedItems(true);
                  }}
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          </div>
          <div className="savedI--Body">
            <BookmarkBorderRoundedIcon />
            <h3>Save messages and files to come back to later</h3>
            <p>
              Mark your to-dos or save something for another time. Only you can
              see your saved items, so use them however you’d like.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`saved--Ichatscreen ${
          savedIChatScreen && "hidesaved--chatscreen"
        }
          ${closeSavedItems && "fullscreen--chatscreen"}
`}
      >
        <ChatScreen />
      </div>
    </div>
  );
}

export default SavedItems;
