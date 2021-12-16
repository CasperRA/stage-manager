import * as React from "react";
import "../styles/global.css";

//components
import Chat from "../components/Chat";

// markup
const ChatPage = () => {
  return (
    <div className="pageWrapper">
      <Chat />
    </div>
  );
};

export default ChatPage;
