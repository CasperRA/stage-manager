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
  return (
    <div>
      <Calendar events={events} />
    </div>
  );
}

export default MyCalendar;
