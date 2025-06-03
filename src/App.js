import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import "./App.css";
import FooterDisclaimer from "./FooterDisclaimer";
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import footnote from 'markdown-it-footnote';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState('chat');

  // 🔐 Auth config
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "BJSHHY0-WPH4EN7-K8RYQVJ-HNWVSBF";
  const WORKSPACE_SLUG = process.env.REACT_APP_WORKSPACE_SLUG;
  const API_URL = process.env.REACT_APP_API_URL;

  const addSystemMessage = (text) => {
    setMessages(prev => [...prev, { sender: "system", text }]);
  };

  const addToggleSystemMessage = (text) => {
    setMessages((prev) => {
      const last = prev[prev.length - 1];
      const shouldReplace =
        last?.sender === "system" && last?.meta === "mode-toggle";

      if (shouldReplace) {
        return [
          ...prev.slice(0, -1),
          { sender: "system", text, meta: "mode-toggle" },
        ];
      } else {
        return [...prev, { sender: "system", text, meta: "mode-toggle" }];
      }
    });
  };

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
        setMessages(prev => [...prev, { sender: "law", text: '⚠️ Geen antwoord ontvangen van de wet, neem contact op met Kees Koenen (https://linkedin.com/in/kkoenen) voor meer informatie over deze site.' }]);
      }
    } catch (error) {
      console.error("Fout bij verzenden:", error);
      setMessages(prev => [...prev, { sender: "law", text: '⚠️ Geen antwoord ontvangen van backend, neem contact op met Kees Koenen (https://linkedin.com/in/kkoenen) voor meer informatie over deze site.' }]);
    }
  };

  return (
    <div className="app-container">
      <div className="mode-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === 'wet'}
            onChange={() => {
              const newMode = mode === 'chat' ? 'wet' : 'chat';
              setMode(newMode);

              const message =
                newMode === 'chat'
                  ? "Chat-modus: meer vrijheid, minder nauwkeurige antwoorden. Geschikt voor open gesprekken."
                  : "Wet-modus: antwoorden zijn beperkt tot de context van de ingeladen wetgeving. Geschikt voor gerichte vragen en gesprekken over de Nederlandse wet.";

              addToggleSystemMessage(message);
            }}
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
      <FooterDisclaimer />
    </div>
  );
}

export default App;
