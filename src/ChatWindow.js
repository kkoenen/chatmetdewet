import React from "react";
import md from "./lib/markdown"; // MarkdownIt configuratie
import { sanitizeMarkdown } from "./lib/sanitize";

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

        // Bepaal de inhoud van het bericht
        let content;
        if (msg.sender === "law") {
          console.log("RAW MESSAGE TEXT:", msg.text);
          const cleanedText = sanitizeMarkdown(msg.text);
          const renderedMarkdown = md.render(cleanedText);
          content = (
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
            />
          );
        } else {
          content = <div>{msg.text}</div>;
        }

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
