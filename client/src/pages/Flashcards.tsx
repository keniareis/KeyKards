import React from 'react';
import Flashcard from '../components/Flashcard';

const Flashcards: React.FC = () => {
  const flashcards = [
    { title: 'Java', description: 'É uma linguagem robusta.' },
    { title: 'JavaScript', description: 'É uma linguagem de scripting.' }
  ];

  return (
    <div className="flashcards-container">
      {flashcards.map((card, index) => (
        <Flashcard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Flashcards;
