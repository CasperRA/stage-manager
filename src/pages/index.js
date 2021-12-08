import * as React from "react";
import "../styles/global.css";

//components
import Example from "../components/Example";
import Calendar from "../components/Calendar";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Home Page</title>
        <Example />
        <Calendar />
      </div>
    </main>
  );
};

export default IndexPage;
