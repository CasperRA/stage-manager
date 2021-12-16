import * as React from "react";
import "../styles/global.css";

//components
import MyCalendar from "../components/MyCalendar";
// markup
const CalendarPage = () => {
  return (
    <main>
      <div className="pageWrapper">
        <title>Home Page</title>
        <MyCalendar />
      </div>
    </main>
  );
};

export default CalendarPage;
