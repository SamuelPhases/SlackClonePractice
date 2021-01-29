import React from "react";
import "./SidebarItemList.css";

import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

function SidebarItemDmList() {
  return (
    <div className="dm--list">
      <div>
        <h2>
          <FavoriteRoundedIcon />
        </h2>
        <h3>bot</h3>
      </div>
      <div>
        <p>1</p>
      </div>
    </div>
  );
}

export default SidebarItemDmList;
