import React, { useState } from 'react';
import '/src/styles/Card.css';
import Navbar from '../components/Navbar';


const Card: React.FC = () => {
  const [deckName, setDeckName] = useState('');
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');

  const handleAddCard = () => {
    // Aqui vai a lógica para adicionar o cartão ao baralho
    console.log('Adicionando cartão:', { deckName, frontText, backText });
  };

  return (
    <div className="cards-container">
        <Navbar/>

        <div className="back-button">
          <button>
            <img src="/src/assets/arrow-back.svg" alt="" />
          </button>
        </div>

      <div className="input-container">
        <input
          type="text"
          className="deck-name-input"
          placeholder="Nome do baralho"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
      </div>

      <div className="card-forms">
        <div className="card-side">
          <h3>Frente</h3>
          <textarea
            placeholder="Digite aqui..."
            value={frontText}
            onChange={(e) => setFrontText(e.target.value)}
          />
        </div>
        <div className="card-side">
          <h3>Verso</h3>
          <textarea
            placeholder="Digite aqui..."
            value={backText}
            onChange={(e) => setBackText(e.target.value)}
          />
        </div>
      </div>

      <div className="add-button-container">
        <button className="add-button" onClick={handleAddCard}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Card;
