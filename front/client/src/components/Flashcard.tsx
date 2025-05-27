import React from 'react';

interface FlashcardProps {
  title: string;
  description: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ title, description }) => {
  return (
    <div className="flashcard">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Flashcard;
