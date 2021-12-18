import React from "react";
import ProfilePic from "../images/profilepic.jpg";
import ManagePeopleIcon from "../images/managePeopleIcon.svg";

function Roles() {
  function addPeople() {
    document.getElementById("peopleCreationContainer").style.display = "block";
  }
  function stopAddingPeople() {
    document.getElementById("peopleCreationContainer").style.display = "none";
  }

  return (
    <div>
      <div className="rolesContainer">
        <div id="roleHolder" className="rolesPadding">
          <div className="rolesIntro">
            <h1 className="rolesTitle">Team</h1>
            <img
              className="rolesIntroImage"
              src={ManagePeopleIcon}
              alt="manage people"
            />
          </div>
          <div id="directorRole" className="roleWrapper">
            <h3>Director</h3>
            <ul id="directorList" className="rolesList">
              <li id="directorNR1">
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
              <li>
                <img src={ProfilePic} alt="" />
                <div>
                  <p>William</p>
                  <p className="roleUnderName">Director</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="addPeopleContainer">
            <button onClick={addPeople} className="roleAddPeople">
              + Add People
            </button>
          </div>
        </div>
      </div>
      <div id="peopleCreationContainer" className="modalContainer">
        <button onClick={stopAddingPeople} className="modalBackground"></button>
        <div className="modalAddPeople">
          <h1>Add people to team</h1>
          <h3>Event Name:</h3>
          <input
            type="text"
            placeholder="Event Example"
            className="eventInput"
          />
        </div>
      </div>
    </div>
  );
}

export default Roles;
