import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';

const Flashcards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar se a carta foi virada

  const flashcards = [
    { title: 'O que é programação', },
    // Adicione mais flashcards conforme necessário
  ]; 

  // Função para lidar com o clique no botão de virar carta
  const handleFlip = () => {
    setIsFlipped(true);
  };

  // Função para lidar com a pesquisa de flashcards
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtrando flashcards com base no termo de pesquisa
  const filteredFlashcards = flashcards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flashcards-container">
      <header className="header">
        <div className="name-logo">
          <img src="/src/assets/logo.svg" alt="logo" />
          <h1>KeyKards</h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="Pesquise seus flashcards"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="nav-icons">
          <button>
            <img src="/src/assets/home.svg" alt="HomeIcon" /> Home
          </button>
          <button>
            <img src="/src/assets/baralho.svg" alt="baralhoIcon" /> Baralhos
          </button>
          <button>
            <img src="/src/assets/person.svg" alt="personIcon" />
          </button>
        </div>
      </header>

      <div className="container-deck">
        <div className="back-button">
          <button><img src="/src/assets/arrow-back.svg" alt="" /></button>
        </div>

        <div className="card">
          {filteredFlashcards.length > 0 ? (
            filteredFlashcards.map((card, index) => (
              <Flashcard key={index} title={card.title} description={card.description} />
            ))
          ) : (
            <p>Nenhum flashcard encontrado</p>
          )}
        </div>

        {!isFlipped ? (
          <div className="flip-button">
            <button className="difficulty" onClick={handleFlip}>
              Virar Carta
            </button>
          </div>
        ) : (
          <div className="difficulty-buttons">
            <button className="difficulty">Muito difícil</button>
            <button className="difficulty">Difícil</button>
            <button className="difficulty">Médio</button>
            <button className="difficulty">Fácil</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcards;
