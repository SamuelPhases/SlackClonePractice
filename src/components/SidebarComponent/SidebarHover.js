import React from "react";
import "./SidebarHover.css";

function SidebarHover({ Icon, topic }) {
  return (
    <div className="sidebarhover">
      <Icon />
      <h5>{topic}</h5>
    </div>
  );
}

export default SidebarHover;
