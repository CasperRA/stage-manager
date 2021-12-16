import React from "react";
import ProfilePic from "../images/profilepic.jpg";

function Roles() {
  return (
    <div>
      <div className="rolesContainer">
        <div className="rolesPadding">
          <h1 className="rolesTitle">Team</h1>
          <div className="roleWrapper">
            <h3>Director</h3>
            <ul className="rolesList">
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="roleWrapper">
            <h3>Stage Manager</h3>
            <ul className="rolesList">
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="roleWrapper">
            <h3>Choreographer</h3>
            <ul className="rolesList">
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="roleWrapper">
            <h3>Actors</h3>
            <ul className="rolesList">
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
