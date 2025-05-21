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
              Deze website maakt gebruik van een experimentele AI-chat, gebaseerd op open source software. De
              broncode is openbaar beschikbaar via{' '}
              <a href="https://github.com/kkoenen/chatmetdewet" target="_blank" rel="noreferrer">
                GitHub
              </a>.
            </p>
            <p>
              De antwoorden van de AI kunnen onjuist, verouderd of onvolledig zijn. Er kunnen geen rechten worden
              ontleend aan de inhoud van deze chat. Voor juridisch advies of bij twijfel over uw situatie raden wij u aan contact op te nemen met een
              advocaat, uw rechtsbijstandverzekering of een rechtswinkel.
            </p>
            <p>Gebruik van deze website is op eigen risico.</p>
            <button onClick={() => setShowModal(false)}>Sluiten</button>
          </div>
        </div>
      )}
    </div>
  );
} 