import React from "react";
import "./SidebarItemTopic.css";

function SidebarItemTopic({ Icon, topic }) {
  return (
    <div className="sidebaritemtopic">
      <Icon />
      <h5>{topic}</h5>
    </div>
  );
}

export default SidebarItemTopic;
