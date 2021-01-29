import React, { useState } from "react";
import "./Preferences.css";

import CloseIcon from "@material-ui/icons/Close";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StorageIcon from "@material-ui/icons/Storage";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AppsIcon from "@material-ui/icons/Apps";
import PersonIcon from "@material-ui/icons/Person";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ChatScreenMessage from "../ChatScreenComponent/ChatScreenMessage";

function Preferences({
  closePreference,
  setShowViewProfile,
  setShowPreferences,
}) {
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState(false);
  const [file, setFile] = useState(true);
  const [accessibility, setAccessibility] = useState(false);
  const [switchTextToggler, setSwitchTextToggler] = useState(true);

  return (
    <div className="preference--container">
      <div className="preference--content">
        <div className="preference--header">
          <h2>Preferences</h2>
          <div className="close--icon" onClick={closePreference}>
            <CloseIcon />
          </div>
        </div>
        <div className="preference--body">
          <div className="preference--body--left">
            <ul>
              <li
                className={`${sidebar && "focus-class"}`}
                onClick={() => {
                  setSidebar(true);
                  setTheme(false);
                  setAccessibility(false);
                  setFile(false);
                }}
              >
                sidebar
              </li>
              <li
                className={`${theme && "focus-class"}`}
                onClick={() => {
                  setSidebar(false);
                  setTheme(true);
                  setAccessibility(false);
                  setFile(false);
                }}
              >
                themes
              </li>
              <li
                className={`${file && "focus-class"}`}
                onClick={() => {
                  setSidebar(false);
                  setTheme(false);
                  setAccessibility(false);
                  setFile(true);
                }}
              >
                messages & media
              </li>
              <li
                className={`${accessibility && "focus-class"}`}
                onClick={() => {
                  setSidebar(false);
                  setTheme(false);
                  setAccessibility(true);
                  setFile(false);
                }}
              >
                advanced
              </li>
            </ul>
          </div>
          <div className="preference--body--right">
            {/* SIDEBAR */}
            {sidebar && (
              <>
                <h4>Always show in the sidebar:</h4>
                <div>
                  <label>
                    <input type="checkbox" />
                    <ClearAllIcon />
                    <span>All unreads</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <QuestionAnswerIcon />
                    <span>All DM's</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <AlternateEmailIcon />
                    <span>Mentions & reactions</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <BookmarkIcon />
                    <span>Saved Items</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <StorageIcon />
                    <span>File browser </span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <PeopleOutlineIcon />
                    <span>People & User groups</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <AppsIcon />
                    <span>Apps</span>
                  </label>
                </div>
              </>
            )}

            {theme && (
              <>
                <h3 className="theme--header">
                  Change the appearance across all of your workspaces.
                </h3>

                <div className="light--theme--toggler">
                  <div className="row1">
                    <PersonIcon />
                    <div>
                      <div>
                        <h3>Bot</h3>
                        <p>1:09am</p>
                      </div>
                      <p>You look nice today.</p>
                    </div>
                  </div>
                  <div className="row2">
                    <label>
                      <input type="radio" name="theme" />
                      <span>light</span>
                    </label>
                  </div>
                </div>
                <div className="dark--theme--toggler">
                  <div className="row1">
                    <PersonIcon />
                    <div>
                      <div>
                        <h3>Bot</h3>
                        <p>1:09am</p>
                      </div>
                      <p>You look nice today.</p>
                    </div>
                  </div>
                  <div className="row2">
                    <label>
                      <input type="radio" name="theme" />
                      <span>dark</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {file && (
              <>
                <h3 className="file--header">Theme</h3>
                <div
                  className="text--toggler"
                  onClick={() => {
                    setSwitchTextToggler(!switchTextToggler);
                  }}
                >
                  {switchTextToggler ? (
                    <>
                      <RadioButtonCheckedIcon />
                      <p>clean</p>
                    </>
                  ) : (
                    <>
                      <RadioButtonUncheckedIcon />
                      <p>Compact</p>
                    </>
                  )}
                </div>
                <p className="eg">Here is an example</p>
                <div className="example--row">
                  <ChatScreenMessage
                    displayName={"Bot"}
                    time={"2:01 am"}
                    message={"Feeling good"}
                    switchTextToggler={switchTextToggler}
                  />
                </div>
                <h3 className="file--header">Names</h3>
                <div className="name--toggler">
                  <RadioButtonCheckedIcon />
                  <p>Full & display names</p>
                </div>
                <p className="eg">Here is an example</p>
                <div className="example--row">
                  <ChatScreenMessage
                    displayName={"Lorem Brian"}
                    time={"08:01 am"}
                    message={"Hi"}
                    switchTextToggler={switchTextToggler}
                  />
                </div>
                <p className="sub--name">
                  To change your full or display name,head to
                  <span
                    onClick={() => {
                      setShowViewProfile(true);
                      setShowPreferences(false);
                    }}
                  >
                    {" "}
                    your profile
                  </span>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
