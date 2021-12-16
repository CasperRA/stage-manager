import * as React from "react";
import "../styles/global.css";

//components
import Front from "../components/Front";
// markup
const FrontPage = () => {
  return (
    <main>
      <div className="pageWrapper">
        <title>Home Page</title>
        <Front />
      </div>
    </main>
  );
};

export default FrontPage;
