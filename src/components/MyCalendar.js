import React from "react";
import Calendar from "react-awesome-calendar";

const events = [
  {
    id: 1,
    color: "#fd3153",
    from: "2021-12-22T08:00+00:00",
    to: "2021-12-22T12:00:00+00:00",
    title: "Tech Day",
  },
  {
    id: 2,
    color: "#1ccb9e",
    from: "2021-12-13T09:00:00+00:00",
    to: "2021-12-13T14:00:00+00:00",
    title: "Practice",
  },
  {
    id: 3,
    color: "#1ccb9e",
    from: "2021-12-13T09:00:00+00:00",
    to: "2021-12-13T14:00:00+00:00",
    title: "Practice",
  },
];

function MyCalendar() {
  function startEventCreation() {
    document.getElementById("eventCreationContainer").style.display = "block";
  }

  function stopEventCreation() {
    document.getElementById("eventCreationContainer").style.display = "none";
  }

  function setDate() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    if (today.getDate() >= 0 && today.getDate() <= 9) {
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-0" +
        today.getDate();
    }
    inputDate = date;
  }
  setDate();
  let inputDate;

  function changeInputDate(event) {
    console.log(event.target.value);
    document.getElementById("startDate").value = event.target.value;
    document.getElementById("startDate").innerHTML = "hey";
  }

  return (
    <div>
      <div className="calendarContainer">
        <Calendar events={events} />
        <div className="buttonContainer">
          <button onClick={startEventCreation} className="createEventButton">
            Create Event
          </button>
        </div>
      </div>
      <div id="eventCreationContainer" className="modalContainer">
        <button
          onClick={stopEventCreation}
          className="modalBackground"
        ></button>
        <div className="modalCreateEvent">
          <div>
            <h1>Create an Event</h1>
          </div>
          <form className="eventForm">
            <label>Event Name:</label>
            <input
              type="text"
              placeholder="Event Example"
              className="eventInput"
            />
            <label>Start date:</label>
            <input
              type="date"
              id="startDate"
              className="eventInput"
              name="trip-start"
              value={inputDate}
              min="2021-01-01"
              max="2040-12-31"
              onChange={changeInputDate}
            />
            <label>End date:</label>
            <input
              type="date"
              id="endDate"
              className="eventInput"
              name="trip-end"
              value={inputDate}
              min="2021-01-01"
              max="2040-12-31"
              onChange={changeInputDate}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
