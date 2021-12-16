import React from "react";
import { Link } from "react-router-dom";
import messageIcon from "../images/messageIcon.svg";
import calendarIcon from "../images/calendar.svg";
import taskIcon from "../images/taskIcon.svg";

function Navbar() {
  return (
    <div>
      <div className="navbarContainer">
        <Link className="link" to={"/"}>
          <img className="linkContent" src={calendarIcon} alt="calendar" />
        </Link>
        <Link className="link" to={"/task"}>
          <img className="linkContent" src={taskIcon} alt="tasks" />
        </Link>
        <Link className="link" to={"/chat"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
        <Link className="link" to={"/roles"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
