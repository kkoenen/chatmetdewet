import React from "react";

function ChatInput({ inputValue, onInputChange, onSend }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();       // prevent newline
      onSend();                 // trigger send
    }
  };

  return (
    <div className="chat-input-section">
      <input
        type="text"
        className="chat-input"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={50000}
        placeholder="Typ uw bericht..."
      />
      <button 
        className="send-button" 
        onClick={onSend}
        disabled={inputValue.trim() === ""}
      >
        Verstuur
      </button>
    </div>
  );
}

export default ChatInput;
