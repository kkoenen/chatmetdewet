# ChatmetdeWet

![Docker Ready](https://img.shields.io/badge/docker-ready-blue)
![React](https://img.shields.io/badge/built%20with-React-61dafb)
![License: MIT](https://img.shields.io/badge/license-MIT-green)
![API: AnythingLLM](https://img.shields.io/badge/API-AnythingLLM-yellow)

**ChatmetdeWet** is een eenvoudige, API-gedreven chatapplicatie waarmee gebruikers vragen kunnen stellen aan een AI-assistent in twee modi:
- **Chat-Mode** – informele gesprekken met AI
- **Wet-Mode** – juridische vragen, beantwoord op basis van Nederlandse wetgeving

De app is gebouwd in React en gebruikt AnythingLLM als backend via een externe API.

---

## 🚀 Features

- Wissel tussen "Chat" en "Wet" modus met een toggle
- Enter-to-send ondersteuning
- Gesprekken met een AI die getraind is op Nederlandse wet- en regelgeving
- Docker & Docker Compose ondersteuning
- .env-configuratie voor veilige API-sleutels

---

## 🛠 Installatie (Development)

1. Clone de repo:

```bash
git clone https://github.com/<jouw-gebruikersnaam>/chatmetdewet.git
cd chatmetdewet```

2. Maak een .env bestand op basis van het voorbeeld:

`cp .env.example .env`

Vul daarin je eigen API-sleutel en workspace in.

3. Start met Docker Compose:

`docker compose up --build`

Gefeliciteerd, de app draait nu op http://localhost:3000

Variabelen (.env)

Naam						Beschrijving
REACT_APP_API_KEY			API key voor AnythingLLM
REACT_APP_WORKSPACE_SLUG	Slug van je workspace
REACT_APP_API_URL			URL van de AnythingLLM endpoint

Zelf testen?
Gebruik Postman om zelf requests te sturen naar AnythingLLM. Vergeet niet de juiste mode mee te geven:

"chat" voor gewone AI
"query" voor wet-onderbouwde antwoorden

Licentie
MIT – gebruik vrij, maar op eigen risico.

🤝 Contact
Gebouwd door Kees Koenen (linkedin.com/in/kkoenen) – met ❤️ voor open source.

