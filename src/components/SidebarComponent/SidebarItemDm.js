import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import "./SidebarItemDm.css";
import SidebarItemDmList from "./SidebarItemDmList";
function SidebarItemDm() {
  const [openDmList, setOpenDmList] = useState(false);


  const toggleDmList = (e) => {
    e.stopPropagation();
    setOpenDmList(!openDmList);
  }



  return (
    <div className="sidebaritemdm">
      <div className="show--dm--on--click"  onClick={(e) => toggleDmList(e)}>
        <div>
          <div
            className="dm--list--toggler"
          >
            {openDmList ? (
              <ArrowDropDownRoundedIcon />
            ) : (
              <ArrowRightRoundedIcon />
            )}
          </div>
          <h5>Direct messages</h5>
        </div>
        <div className="sidebaritem--plus">
          {/* <AddRoundedIcon /> */}
        </div>
      </div>
      {openDmList && (
        <>
          <SidebarItemDmList />
          <SidebarItemDmList />
          <SidebarItemDmList />
          <SidebarItemDmList />
          <SidebarItemDmList />
          <SidebarItemDmList />
        </>
      )}
      <div className="add--dm">
        <div>
          <AddRoundedIcon />
        </div>
        <h5>Invite people</h5>
      </div>
    </div>
  );
}

export default SidebarItemDm;
