import React from "react";
import "../styles/global.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed";
import LoginForm from "../components/LoginForm";

function chat() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="pageWrapper">
      <ChatEngine
        projectID="0e50bec2-4943-41cc-ac42-8d2e2b2d8abf"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default chat;
