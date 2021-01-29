import React, { useState } from "react";
import "./SidebarItem.css";

import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import SubjectRoundedIcon from "@material-ui/icons/SubjectRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import SidebarItemTopic from "./SidebarItemTopic";
import SidebarItemChannel from "./SidebarItemChannel";
import SidebarItemDm from "./SidebarItemDm";
import SidebarHover from "./SidebarHover";
import SidebarItemApp from "./SidebarItemApp";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddChannel from "../AddForm/AddChannel";

function SidebarItem() {
  const [show, setShow] = useState(false);
  const [showSavedItems, setShowSavedItems] = useState(false);

  
  return (
  <>
    <div className="sidebar--item--content">
      <div className="sidebar--topics">
        <Link to="/threads">
          <SidebarItemTopic Icon={InsertCommentRoundedIcon} topic={"Threads"} />
        </Link>
        <Link to="/alldms">
          <SidebarItemTopic
            Icon={QuestionAnswerRoundedIcon}
            topic={"All Dm's"}
          />
        </Link>
        <Link to="/reactions">
          <SidebarItemTopic
            Icon={AlternateEmailRoundedIcon}
            topic={"mentions & reactions"}
          />
        </Link>
        <Link to="/saveditems">
          <SidebarItemTopic Icon={BookmarkRoundedIcon} topic={"saved items"} />
        </Link>
        <div
          className="click--toggler--topic"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div>
            <MoreVertRoundedIcon />
          </div>
          <h5>more</h5>
        </div>
        {show && (
          <div className="show--topic--on--click">
            <SidebarHover Icon={SubjectRoundedIcon} topic={"All unreads"} />
            <div className="separator"></div>
            <SidebarHover Icon={StorageRoundedIcon} topic={"File Browser"} />
            <SidebarHover
              Icon={RecentActorsRoundedIcon}
              topic={"People & user groups"}
            />
            <SidebarHover Icon={AppsRoundedIcon} topic={"Apps"} />
          </div>
        )}
      </div>
      <div className="sidebar--channel">
          <SidebarItemChannel/>
      </div>
      <div className="sidebar--dm">
        <SidebarItemDm />
      </div>
      <SidebarItemApp />
      </div>
      </>
  );
}

export default SidebarItem;
