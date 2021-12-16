import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../images/logoIcon.svg";

function Front() {
  return (
    <div>

        <Link className="logo" to={"/front"}>
          <img className="logoContent" src={logoIcon}  alt="logo"/>
        </Link> 

  </div>
  );
}

export default Front;
