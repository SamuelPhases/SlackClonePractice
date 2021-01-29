import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";

function SidebarItemApp() {
  const [openAppList, setOpenAppList] = useState(false);
  return (
    <div className="sidebaritemdm">
      <div className="show--dm--on--click">
        <div>
          <div
            className="dm--list--toggler"
            onClick={() => {
              setOpenAppList(!openAppList);
            }}
          >
            {openAppList ? (
              <ArrowDropDownRoundedIcon />
            ) : (
              <ArrowRightRoundedIcon />
            )}
          </div>
          <h5>Apps</h5>
        </div>
        <div className="sidebaritem--plus">{/* <AddRoundedIcon /> */}</div>
      </div>
    </div>
  );
}

export default SidebarItemApp;
