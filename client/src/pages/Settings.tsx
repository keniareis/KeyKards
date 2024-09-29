import React, { useState} from 'react';
import '/src/styles/Settings.css';
import { FaPen } from 'react-icons/fa'; // Ícone de lápis para edição

const Settings: React.FC = () => {

  
  const [showDropdown, setShowDropdown] = useState(false);

  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="user-settings-container">
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
      <div className="back-button">
        <button>
          <img src="/src/assets/arrow-back.svg" alt="" />
        </button>
      </div>
      <div className="user-settings-card">
        <div className="input-group">
          <label>Nome de usuário</label>
          <div className="input-field">
            <span>Kenia Reis</span>
            <FaPen className="edit-icon" />
          </div>
        </div>
        <hr />

        <div className="input-group">
          <label>Email</label>
          <div className="input-field">
            <span>Keniareis@gmail.com</span>
            <FaPen className="edit-icon" />
          </div>
        </div>
        <hr />

        <div className="input-group">
          <label>Senha</label>
          <div className="input-field">
            <span>**************</span>
            <FaPen className="edit-icon" />
          </div>
        </div>
        <hr />

        <div className="delete-account-section">
          <div className='delete-account-name'>
            <span>Apagar sua conta</span>
            <p>Isso apagará seus dados para sempre</p>
          </div>
            <button className="delete-account-btn">Apagar conta</button>
          </div>
      </div>
    </div>
  );
};

export default Settings;
