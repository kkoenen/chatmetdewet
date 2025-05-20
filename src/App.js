import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import "./App.css";


function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState('chat');

  // 🔐 Auth config
  const API_KEY = "13FTHRM-KQVM2WE-K4R4JFS-Q9Z07R5";
  const WORKSPACE_SLUG = "chatmetdewet-dot-eu";
  const API_URL = "https://api.keeskoenen.com/api/v1";

  const handleSend = async () => {
    const messageToSend = inputText.trim();
    if (messageToSend === "") return;

    // Voeg gebruikersbericht toe
    setMessages(prev => [...prev, { sender: "user", text: messageToSend }]);
    setInputText("");

    try {
      const response = await fetch(`${API_URL}/workspace/${WORKSPACE_SLUG}/chat`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: messageToSend,
          mode: mode === 'wet' ? 'query' : 'chat'
        })
      });

      const data = await response.json();

      if (data.textResponse) {
        setMessages(prev => [...prev, { sender: "law", text: data.textResponse }]);
      } else {
        setMessages(prev => [...prev, { sender: "law", text: "⚠️ Geen antwoord ontvangen van de wet." }]);
      }
    } catch (error) {
      console.error("Fout bij verzenden:", error);
      setMessages(prev => [...prev, { sender: "law", text: "⚠️ Er ging iets mis met de verbinding." }]);
    }
  };

  return (
    <div className="app-container">
      <div className="mode-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === 'wet'}
            onChange={() => setMode(mode === 'chat' ? 'wet' : 'chat')}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-label">
          {mode === 'chat' ? 'Chat-Mode' : 'Wet-Mode'}
        </span>
      </div>
      <ChatWindow messages={messages} />
      <ChatInput 
        inputValue={inputText}
        onInputChange={setInputText}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
