import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../images/logoIcon.svg";

function Front() {
  return (
    <div>
<div className="logoNav">
        <Link className="logo" to={"/front"}>
          <img className="logoContent" src={logoIcon}  alt="logo"/>
        </Link> 
</div>
<div className="forside">

</div>
  </div>
  );
}

export default Front;
