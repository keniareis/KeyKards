import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';

const Flashcards: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Estado para controlar qual flashcard está sendo exibido
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar se a carta foi virada

  const flashcards = [
    { title: 'O que é programação?', description: 'É o processo de escrever e manter o código-fonte de um programa de computador.' },
    { title: 'O que é um algoritmo?', description: 'É uma sequência de passos finitos para resolver um problema.' },
    // Adicione mais flashcards conforme necessário
  ];

  // Função para lidar com o clique no botão de virar carta
  const handleFlip = () => {
    setIsFlipped(true); // Vira a carta
  };

  // Função para avançar para o próximo flashcard
  const handleNextCard = () => {
    setIsFlipped(false); // Desvira a carta ao avançar para o próximo
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  // Função para voltar ao flashcard anterior
  const handlePreviousCard = () => {
    setIsFlipped(false); // Desvira a carta ao voltar
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  // Função para lidar com o clique nos botões de dificuldade
  const handleDifficultyClick = () => {
    handleNextCard(); // Avança para o próximo flashcard quando qualquer botão de dificuldade for clicado
  };

  const [showDropdown, setShowDropdown] = useState(false);

  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="flashcards-container-flash">
      <header className="header">
        <div className='name-logo'>
          <img src="/src/assets/logo.svg" alt="logo" />
          <h1>KeyKards</h1>
        </div>
        <div>
          <input type="text" placeholder="Pesquise seus flashcards" className="search-bar" />
        </div>
        <div className="nav-icons">
          <button><img src="/src/assets/home.svg" alt="HomeIcon"/>Home</button>
          <button><img src="/src/assets/baralho.svg" alt="baralhoIcon" />Baralhos</button>
          <button onClick={toggleDropdown}>
            <img src="/src/assets/person.svg" alt="person" />
          </button>

          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown-item">
                <img src="/src/assets/gear.svg" alt="config" />
                <span>Configurações</span>
              </div>
              <hr className='hr-dropdown'/>
              <div className="dropdown-item">
                <img src="/src/assets/out.svg" alt="logout" />
                <span>Sair</span>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="container-deck">
        <div className="back-button">
          <button onClick={handlePreviousCard} disabled={currentCardIndex === 0}>
            <img src="/src/assets/arrow-back.svg" alt="" />
          </button>
        </div>

        <div className="card-flash">
          {/* Exibe o título se a carta não estiver virada, senão exibe a descrição */}
          {!isFlipped ? (
            <Flashcard title={flashcards[currentCardIndex].title} />
          ) : (
            <Flashcard description={flashcards[currentCardIndex].description} />
          )}
        </div>

        {/* Botão de virar a carta, só aparece enquanto a carta não estiver virada */}
        {!isFlipped ? (
          <div className="flip-button">
            <button className="difficulty" onClick={handleFlip}>
              Virar Carta
            </button>
          </div>
        ) : (
          <div className="difficulty-buttons">
            <button className="difficulty" onClick={handleDifficultyClick}>
              Muito difícil
            </button>
            <button className="difficulty" onClick={handleDifficultyClick}>
              Difícil
            </button>
            <button className="difficulty" onClick={handleDifficultyClick}>
              Médio
            </button>
            <button className="difficulty" onClick={handleDifficultyClick}>
              Fácil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcards;
