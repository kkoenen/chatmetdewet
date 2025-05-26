import React, { useState } from 'react';
import './FooterDisclaimer.css';

export default function FooterDisclaimer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="disclaimer-container">
      <small>
        <button className="disclaimer-link" onClick={() => setShowModal(true)}>
          Disclaimer
        </button>
        : deze AI kan fouten maken.{' '}
      </small>

      {showModal && (
        <div className="disclaimer-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="disclaimer-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Disclaimer</h3>
              <p>
                Deze website maakt gebruik van een experimentele AI-chat, gebaseerd op open source software. De broncode is openbaar beschikbaar via{' '}
              <a href="https://github.com/kkoenen/chatmetdewet" target="_blank" rel="noreferrer">GitHub</a>.
              </p>
              <p>
                De antwoorden van de AI kunnen onjuist, verouderd of onvolledig zijn. Er kunnen geen rechten worden ontleend aan de inhoud van deze chat. Voor juridisch advies of bij twijfel over uw situatie raden wij u aan contact op te nemen met een advocaat, uw rechtsbijstandverzekering of een rechtswinkel.
              </p>
              <p>
                Privacy en gegevensbescherming (AVG/GDPR) - Deze applicatie is ontworpen met aandacht voor privacy en gegevensbeveiliging. Zowel de frontend als het backend-systeem zijn zo ingericht dat het risico op datalekken wordt beperkt. Toch kan, mede vanwege het experimentele karakter van deze applicatie, geen garantie worden gegeven op volledige bescherming van ingevoerde gegevens. Wij raden ten zeerste af om persoonlijke informatie zoals uw naam, e-mailadres, bankgegevens of andere gevoelige persoonsgegevens te delen in de chat. Alle ingevoerde gegevens worden verwerkt op basis van functionele noodzaak, en er worden geen gegevens langer bewaard dan nodig is.
              </p>
              <p>
                Door gebruik te maken van deze website gaat u akkoord met dit beleid.
              </p>
            <button onClick={() => setShowModal(false)}>Sluiten</button>
          </div>
        </div>
      )}
    </div>
  );
} 