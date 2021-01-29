import React, { useState } from "react";
import "./Header.css";

import HistoryIcon from "@material-ui/icons/History";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EditIcon from "@material-ui/icons/Edit";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import EditProfile from "../PartialComponent/EditProfile";
import ViewProfile from "../PartialComponent/ViewProfile";
import Preferences from "../PartialComponent/Preferences";
import SearchBox from "../PartialComponent/SearchBox";
import SearchHelp from "../PartialComponent/SearchHelp";
import SearchHistory from "../PartialComponent/SearchHistory";

function Header() {
  const [profileToggler, setProfileToggler] = useState(false);
  const [activeAway, setActiveAway] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [showPeferences, setShowPreferences] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [helpSearch, setHelpSearch] = useState(false);
  const [searchHistory, setSearchHistory] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header--content">
          <div className="header--content--center">
            <div
              className="header--content--center--history"
              onClick={() => {
                setSearchHistory(!searchHistory);
              }}
            >
              <HistoryIcon />
            </div>
            <div
              className="header--content--center--search"
              onClick={() => {
                setOpenSearch(true);
              }}
            >
              <p>Search</p>
            </div>
            <div
              className="header--content--center--help"
              onClick={() => {
                setHelpSearch(!helpSearch);
              }}
            >
              <HelpOutlineIcon />
            </div>
          </div>
          <div
            className="header--content--right"
            onClick={() => {
              setProfileToggler(!profileToggler);
            }}
          >
            <div className="header--content--profile">
              <AccountBoxIcon />
            </div>
            <div className="header--content--online">
              {activeAway ? (
                <FiberManualRecordIcon />
              ) : (
                <FiberManualRecordOutlinedIcon />
              )}
            </div>
            {profileToggler && (
              <div className="profile--toggle">
                <div className="profile--toggle--header">
                  <AccountBoxIcon />
                  <div className="profile--toggle--id">
                    <h4>Lorem Brian</h4>
                    <div className="profile--toggle--away--active">
                      {!activeAway ? (
                        <>
                          <FiberManualRecordOutlinedIcon />
                          <p>away</p>
                        </>
                      ) : (
                        <>
                          <FiberManualRecordIcon />
                          <p>active</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="profile--toggle--status">
                  <EmojiEmotionsIcon />
                  <p>Update your status</p>
                </div>
                <p
                  className="switch--active"
                  onClick={() => {
                    setActiveAway(!activeAway);
                    console.log(123);
                  }}
                >
                  Set yourself as
                  {activeAway ? (
                    <strong> away</strong>
                  ) : (
                    <strong> active</strong>
                  )}
                </p>
                <div className="profile--edit">
                  <div
                    className="edit--profile"
                    onClick={() => {
                      setShowEditProfile(true);
                    }}
                  >
                    <EditIcon />
                    <p>Edit profile</p>
                  </div>
                  <div
                    className="view--profile"
                    onClick={() => {
                      setShowViewProfile(true);
                    }}
                  >
                    <p>View profile</p>
                  </div>
                  <p
                    className="preference"
                    onClick={() => {
                      setShowPreferences(true);
                    }}
                  >
                    Preferences
                  </p>
                </div>
                <div className="split--sign--out"></div>
                <div className="sign--out">
                  <p>Sign out of ALC 4 Hamoye</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showEditProfile && (
        <EditProfile
          closeEdit={() => {
            setShowEditProfile(false);
          }}
        />
      )}
      {showViewProfile && (
        <ViewProfile
          activeAway={activeAway}
          editFromViewProfile={() => {
            setShowEditProfile(true);
            setShowViewProfile(false);
          }}
          closeViewProfile={() => {
            setShowViewProfile(false);
          }}
        />
      )}
      {showPeferences && (
        <Preferences
          setShowPreferences={setShowPreferences}
          setShowViewProfile={setShowViewProfile}
          closePreference={() => {
            setShowPreferences(false);
          }}
        />
      )}

      {openSearch && <SearchBox setOpenSearch={setOpenSearch} />}
      {helpSearch && <SearchHelp setHelpSearch={setHelpSearch}/>}

      {searchHistory && <SearchHistory />}
    </>
  );
}

export default Header;
