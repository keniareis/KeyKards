import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Flashcards from './pages/Flashcards';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Decks from './pages/Decks';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/decks" element={<Decks/>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
