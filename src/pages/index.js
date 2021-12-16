import * as React from "react";
import "../styles/global.css";

//components
import Example from "../components/Example";
import Chat from "../components/Chat";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Home Page</title>
        <Chat />
      </div>
    </main>
  );
};

export default IndexPage;
