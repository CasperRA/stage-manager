import * as React from "react";
import "../styles/global.css";

//components
import Example from "../components/Example";
import MyCalendar from "../components/MyCalendar";
import EmergencyCall from "../components/EmergencyCall";
import Roles from "../components/Roles";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Home Page</title>
        <MyCalendar />
        <EmergencyCall />
        <Roles />
      </div>
    </main>
  );
};

export default IndexPage;
