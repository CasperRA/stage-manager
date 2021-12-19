import React from "react";
import ProfilePic from "../images/profilepic.jpg";
import ManagePeopleIcon from "../images/managePeopleIcon.svg";

class Roles extends React.Component {
  componentDidMount() {}
  render() {
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
            <div id="directorTitle" className="roleWrapper">
              <h3 className="roleTitle">Director</h3>
              <ul id="directorList" className="rolesList">
                <li className="directorItem" id="directorNR1">
                  <img src={ProfilePic} alt="" />
                  <div>
                    <p>William</p>
                    <p className="roleUnderName">Director</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="roleWrapper">
              <h3 className="roleTitle">Stage Manager</h3>
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
              <h3 className="roleTitle">Choreographer</h3>
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
          </div>
        </div>
        <div className="addPeopleContainer">
          <button onClick={addPeople} className="roleAddPeople">
            + Add People
          </button>
        </div>
        <div id="peopleCreationContainer" className="modalContainer">
          <button
            onClick={stopAddingPeople}
            className="modalBackground"
          ></button>
          <div className="modalAddPeople">
            <h2>Add people to team</h2>
            <div className="peopleDetails">
              <h3>Title:</h3>
              <select id="selectTitle" name="Title"></select>
              <h4>
                Title not there? <br /> Add a new title below:
              </h4>
              <input
                id="addNewTitle"
                type="text"
                placeholder="Directors, Actors etc..."
                className="eventInput"
              />
              <h3>Name:</h3>
              <input
                id="addName"
                type="text"
                placeholder="Name..."
                className="eventInput"
              />
              <h3>Specific Role:</h3>
              <input
                id="addSpecificRole"
                type="text"
                placeholder="Head Actor, Technical Director etc... "
                className="eventInput"
              />
            </div>
            <button onClick={addNewPeople}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
function addPeople() {
  document.getElementById("peopleCreationContainer").style.display = "block";
  let title = document.getElementsByClassName("roleTitle");

  for (let i = 0; i < title.length; i++) {
    console.log(title[i].innerHTML);
    if (document.getElementById("option" + title[i].innerHTML) != null) {
      console.log(i + "already exists");
    } else {
      document.getElementById("selectTitle").innerHTML +=
        "<option id='option" +
        title[i].innerHTML +
        "'value=" +
        title[i].innerHTML +
        ">" +
        title[i].innerHTML +
        "</option>";
    }
  }
}

function stopAddingPeople() {
  document.getElementById("peopleCreationContainer").style.display = "none";
}

function addNewPeople() {
  document.getElementById("peopleCreationContainer").style.display = "none";
  let getTitleUpper = document.getElementById("selectTitle").value;

  let getNewTitleUpper = document.getElementById("addNewTitle").value;
  let getNameUpper = document.getElementById("addName").value;
  let getRoleUpper = document.getElementById("addSpecificRole").value;

  let getTitle = getTitleUpper.toLowerCase();
  let getNewTitle = getNewTitleUpper.toLowerCase();
  let getName = getNameUpper.toLowerCase();
  let getRole = getRoleUpper.toLowerCase();

  console.log(getTitle);

  console.log("--- adding a new person ---");
  console.log(getName.length);
  if (getName.length > 0) {
    console.log(getNewTitle.length + " new title");
    if (getNewTitle.length > 0) {
      if (document.getElementById(getNewTitle + "Title") != undefined) {
        console.log(getTitle + " lets add new people");
        let findList = document.getElementById(getNewTitle + "List");
        let findItems = document.getElementsByClassName(getNewTitle + "Item");
        let loopTimes = findItems.length + 1;
        console.log(loopTimes);
        for (let i = 0; i < loopTimes; i++) {
          console.log("loop " + i);
          if (document.getElementById(getNewTitle + "NR" + i) == undefined) {
            console.log("added");
            findList.innerHTML +=
              '<li class="' +
              getTitle +
              'Item" id="' +
              getTitle +
              "NR" +
              i +
              '"><img src="../images/profilepic.jpg" alt="Person" /><div><p>' +
              getNameUpper +
              '</p><p class="roleUnderName">' +
              getRoleUpper +
              "</p></div></li>";
          }
        }
      } else {
        let findMasterDiv = document.getElementById("roleHolder");
        findMasterDiv.innerHTML +=
          '<div id="' +
          getNewTitle +
          'Title" class="roleWrapper"><h3 class="roleTitle">' +
          getNewTitleUpper +
          '</h3><ul id="' +
          getNewTitle +
          'List" class="rolesList"><li class="' +
          getNewTitle +
          'Item" id="' +
          getNewTitle +
          'NR0"><img src="../images/profilepic.jpg" alt="Person" /><div><p>' +
          getNameUpper +
          '</p><p class="roleUnderName">' +
          getRoleUpper +
          "</p></div></li></ul></div>";
      }
    } else {
      console.log(getTitle + " lets add new people");
      let findList = document.getElementById(getTitle + "List");
      let findItems = document.getElementsByClassName(getTitle + "Item");
      let loopTimes = findItems.length + 1;
      console.log(loopTimes);
      for (let i = 0; i < loopTimes; i++) {
        console.log("loop " + i);
        if (document.getElementById(getTitle + "NR" + i) == undefined) {
          console.log("added");
          findList.innerHTML +=
            '<li class="' +
            getTitle +
            'Item" id="' +
            getTitle +
            "NR" +
            i +
            '"><img src="../images/profilepic.jpg" alt="Person" /><div><p>' +
            getNameUpper +
            '</p><p class="roleUnderName">' +
            getRoleUpper +
            "</p></div></li>";
        }
      }
    }
  }
}

export default Roles;
