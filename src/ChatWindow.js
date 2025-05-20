import React from "react";
import ReactMarkdown from "react-markdown";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => {
        const className = "message " + (msg.sender === "user" ? "user-message" : "law-message");

        return (
          <div key={index} className={className}>
            {msg.sender === "law" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChatWindow;
