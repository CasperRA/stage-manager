import React, { useState } from "react";
import Calendar from "react-awesome-calendar";
import { CirclePicker } from "react-color";

const events = [];

function MyCalendar() {
  let eventColor = 0;
  let eventTitle = 0;
  let startDate = 0;
  let endDate = 0;

  function startEventCreation() {
    document.getElementById("eventCreationContainer").style.display = "block";
  }

  function stopEventCreation() {
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
