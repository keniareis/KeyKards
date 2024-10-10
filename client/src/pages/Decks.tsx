import React from 'react';
import '/src/styles/Decks.css';
import Navbar from '../components/Navbar';  

const Decks: React.FC = () => {
  const decks = [
    { name: 'Java', cards: 20 },
    { name: 'Javascript', cards: 10 },
    { name: 'Nodejs', cards: 15 },
    { name: 'Springboot', cards: 12 },
    { name: 'Flutter', cards: 18 },
    { name: 'Python', cards: 25 },
    { name: 'Ruby', cards: 8 }
  ];

  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="decks-container">
      <Navbar/>

      <div className="decks-section">
        <button className="back-button">
          <img src="/src/assets/arrow-back.svg" alt="Back" />
        </button>

        <div className="card-stack">
            <button className="new-deck-button">Novo baralho</button>
            <div className="card smaller-card01"></div>
            <div className="card main-card">
              <img src="/src/assets/gear.svg" alt="gear" />
              <h2>{decks[0].name}</h2>
              <p>{decks[0].cards} cartões</p>
              <button className='study-btn'>Estudar</button>
            </div>
            <div className="card smaller-card02"></div>
            <div className="right-buttons">
              <button className="edit-deck-button">Editar baralho</button>
              <button className="add-card-button">Adicionar carta</button>
            </div>
          </div>

        <div className='slider'>
            <p>Ver tudo <img src="/src/assets/arrow.svg" alt="arrow-see" /></p>
            <div className="flashcard-slider-container">
              <button className='arrow-left' onClick={scrollLeft}>
                <img src="/src/assets/arrow.svg" alt="arrow-left" />
              </button>
              <div className="flashcard-slider" ref={scrollRef}>
                <button>Javascript</button>
                <button>Nodejs</button>
                <button>Springboot</button>
                <button>Flutter</button>
                <button>React</button>
                <button>Vue.js</button>
                <button>Vue.js</button>
                <button>Vue.js</button>
              </div>
              <button className='arrow-right' onClick={scrollRight}>
                <img src="/src/assets/arrow.svg" alt="arrow-right" />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Decks;
