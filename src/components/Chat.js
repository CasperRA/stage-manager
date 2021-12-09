import React from "react";
import "../styles/global.css";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed'

function Chat() {
  return (
      <ChatEngine
        projectID='0e50bec2-4943-41cc-ac42-8d2e2b2d8abf'
        userName='Christian Borggård'
        userSecret='thisisme'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  );
}

export default Chat;
