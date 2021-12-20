import React, { useState } from "react";
import Calendar from "react-awesome-calendar";
import { CirclePicker } from "react-color";

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
    color: "#000000",
    from: "2021-12-13T09:00:00+00:00",
    to: "2021-12-13T14:00:00+00:00",
    title: "Practice-Test",
  },
  {
    id: 4,
    color: "#1ccb9e",
    from: "2021-12-16T09:00:00+00:00",
    to: "2021-12-16T14:00:00+00:00",
    title: "Practice",
  },
];

function MyCalendar() {
  let eventColor = 0;
  let eventTitle = 0;
  let startDate = 0;
  let endDate = 0;


  function startEventCreation() {
    if (typeof window === "undefined" || !window.document) {
      return;
  }
    document.getElementById("eventCreationContainer").style.display = "block";
  }

  function stopEventCreation() {
    if (typeof window === "undefined" || !window.document) {
      return;
  }
    document.getElementById("eventCreationContainer").style.display = "none";
  }

  function setColor(color) {
    eventColor = color.hex;
    console.log(eventColor);
  }

  function setTitle(event) {
    eventTitle = event.target.value;
    console.log(eventTitle);
  }

  function setStartDate(event) {
    startDate = event.target.value;
    console.log(startDate);
  }

  function setEndDate(event) {
    endDate = event.target.value;
    console.log(endDate);
  }

  function createEvent() {
    if (
      eventColor !== 0 &&
      eventTitle !== 0 &&
      startDate !== 0 &&
      endDate !== 0
    ) {
      events.push({
        color: eventColor,
        from: startDate,
        to: endDate,
        title: eventTitle,
      });
      console.log("accepted");
      if (typeof window === "undefined" || !window.document) {
        return;
    }
      document.getElementById("eventCreationContainer").style.display = "none";
    } else {
      alert("You are missing something");
    }
  }

  return (
    <div>
      <div className="calendarContainer">
        <Calendar events={events} />
        <div className="buttonContainer">
          <button onClick={startEventCreation} className="createEventButton">
            <span className="createPlus">+</span> Create Event
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
          <div className="eventForm">
            <h3>Event Name:</h3>
            <input
              type="text"
              placeholder="Event Example"
              className="eventInput"
              onChange={setTitle}
            />
            <h3>Start date:</h3>
            <input
              type="datetime-local"
              id="startDate"
              className="eventInput"
              name="trip-start"
              onChange={setStartDate}
            />
            <h3>End date:</h3>
            <input
              type="datetime-local"
              id="endDate"
              className="eventInput"
              name="trip-start"
              onChange={setEndDate}
            />
            <div className="colorContainer">
              <h3>Pick a color</h3>
              <CirclePicker onChange={setColor} />
            </div>
            <button className="finalizeEvent" onClick={createEvent}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
