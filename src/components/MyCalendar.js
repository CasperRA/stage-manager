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
  function startEventCreation() {}

  function stopEventCreation() {
    alert("hi");
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
            <h1>Hey</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
