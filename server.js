const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Serveer statische bestanden uit de React build
app.use(express.static(path.join(__dirname, "build")));

// Stub API endpoint voor chatten met de "wet"
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message || "";
  const reply = `Antwoord van de wet (mock): ${userMessage}`;
  res.json({ response: reply });
});

// Voor alle andere routes, retourneer index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
