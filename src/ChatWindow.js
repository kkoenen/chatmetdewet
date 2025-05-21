import React from "react";
import ReactMarkdown from "react-markdown";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => {
        let className = "message";

        if (msg.sender === "user") {
          className += " user-message";
        } else if (msg.sender === "law") {
          className += " law-message";
        } else if (msg.sender === "system") {
          className += " system";
        }

        const content =
          msg.sender === "law" ? (
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          ) : (
            msg.text
          );

        return (
          <div key={index} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default ChatWindow;
