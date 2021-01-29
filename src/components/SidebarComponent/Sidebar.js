import React, { useState } from "react";
import "./Sidebar.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from "@material-ui/icons/Create";
import SidebarItem from "./SidebarItem";
import About from "../AboutComponent/About";
import Preferences from "../PartialComponent/Preferences";
// M
function Sidebar({showAddChanel}) {
  const [about, setAbout] = useState(false);
  const [showPeference, setShowPreference] = useState(false);

  return (
    <>
      {about && (
        <About
          showPeference={showPeference}
          setShowPreference={setShowPreference}
        />
      )}
      {showPeference && (
        <Preferences
          setShowPreference={setShowPreference}
          // setShowViewProfile={setShowViewProfile}
          closePreference={() => {
            setShowPreference(false);
          }}
        />
      )}
      <div className="sidebar">
        <div className="sidebar--header">
          <div
            className="sidebar--header--left"
            onClick={() => {
              setAbout(true);
            }}
          >
            <h1>ALC 4 Hamoye</h1>
            <ExpandMoreIcon />
          </div>
          <div className="sidebar--header--right">
            <div className="edit__create__icon">
              <CreateIcon />
            </div>
          </div>
        </div>
        <div className="sidebar--item">
          <SidebarItem showAddChanel={showAddChanel}/>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
