import React from 'react';
import '/src/styles/Settings.css';
import { FaPen } from 'react-icons/fa'; // Ícone de lápis para edição
import Navbar from '../components/Navbar';


const Settings: React.FC = () => {
  return (
    <div className="user-settings-container">
      <Navbar/>
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
