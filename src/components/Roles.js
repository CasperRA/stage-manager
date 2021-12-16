import React from "react";
import ProfilePic from "../images/profilepic.jpg";

function Roles() {
  return (
    <div>
      <div className="rolesContainer">
        <div className="rolesPadding">
          <h1>Roles</h1>
          <h3>Director</h3>
          <ul className="rolesList">
            <li>
              <img src={ProfilePic} alt="" />
              <p>William</p>
            </li>
          </ul>
          <h3>Stage Manager</h3>
          <ul className="rolesList">
            <li>
              <img src={ProfilePic} alt="" />
              <p>Stella</p>
            </li>
          </ul>
          <h3>Choreographer</h3>
          <ul className="rolesList">
            <li>
              <img src={ProfilePic} alt="" />
              <p>Sarah</p>
            </li>
          </ul>
          <h3>Actors</h3>
          <ul className="rolesList">
            <li>
              <img src={ProfilePic} alt="" />
              <p>Michael</p>
            </li>
            <li>
              <img src={ProfilePic} alt="" />
              <p>Michael</p>
            </li>
            <li>
              <img src={ProfilePic} alt="" />
              <p>Michael</p>
            </li>
            <li>
              <img src={ProfilePic} alt="" />
              <p>Cleo</p>
            </li>
            <li>
              <img src={ProfilePic} alt="" />
              <p>Cleo</p>
            </li>
            <li>
              <img src={ProfilePic} alt="" />
              <p>Cleo</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Roles;
