// components/Header.tsx
import React from 'react';
import './Header.css'; // Certifique-se de criar este arquivo também

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>Your Logo</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-icons">
        <img src="/assets/bell-icon.png" alt="Notifications" />
        <img src="/assets/settings-icon.png" alt="Settings" />
      </div>
    </header>
  );
};

export default Header;
