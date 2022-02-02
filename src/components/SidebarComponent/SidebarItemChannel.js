import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';


import "./SidebarItemChannel.css";
import ChannelSingleList from "./ChannelSingleList";
import AddChannel from "../AddForm/AddChannel";

function SidebarItemChannel({showAddChannel}) {
  const [openChannelList, setOpenChannelList] = useState(true);
  const [addChannel,setAddChannel]=useState(false)

  const toggleChannelList = (e) => {
    e.stopPropagation();
    setOpenChannelList(!openChannelList);
  }

  return (
  <>

    <div className="sidebaritemchannel">
      <div
        className="show--channel--on--click"
        onClick={(e) => toggleChannelList(e)}
      >
        <div>
          <div className="channel--arrow">
            {openChannelList ? (
              <ArrowDropDownRoundedIcon />
            ) : (
              <ArrowRightRoundedIcon />
            )}
          </div>
          <h5>Channels</h5>
        </div>
        <div onClick={() => setAddChannel(!addChannel)}>
          {!addChannel ? <AddRoundedIcon /> : <RemoveRoundedIcon/>}
        </div>
      </div>
      <div className="channel--list">
        {openChannelList && (
          <>
            <ChannelSingleList />
            <ChannelSingleList />
            <ChannelSingleList />
          </>
        )}
        <div className="add--channel" onClick={()=>{setAddChannel(!addChannel)}}>
          <div>
            {!addChannel ? <AddRoundedIcon /> : <RemoveRoundedIcon/>}
          </div>
          <h5>Add a channel</h5>
          </div>
          { addChannel && (
       <AddChannel/>
    )}
      </div>
    </div></>
  );
}

export default SidebarItemChannel;
