import React from "react";
import { Link } from "react-router-dom";
import messageIcon from "../images/messageIcon.svg";

function Navbar() {
  return (
    <div>
      <div className="navbarContainer">
        <Link className="link" to={"/"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
        <Link className="link" to={"/roles"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
        <Link className="link" to={"/test"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
        <Link className="link" to={"/test"}>
          <img className="linkContent" src={messageIcon} alt="messages" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
