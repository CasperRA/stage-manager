import * as React from "react";
import "../styles/global.css";

//components
import MyCalendar from "../components/MyCalendar";
// markup
const calendar = () => {
  return (
    <main>
      <div className="pageWrapper">
        <MyCalendar />
      </div>
    </main>
  );
};

export default calendar;
