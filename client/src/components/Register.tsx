import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="register-container">
      <img src="/src/assets/elipses.svg" alt="" className="background-elipses" />
      <div className="register-box">
        <div className="register-inputs">
          <div className="register-header">
            <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
            <h1>Cadastre-se</h1>
          </div>
          <div className='register-input-names'>
            <input 
                type="text" 
                placeholder="Nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                className="register-input-field-nome"
                />
            <input 
                type="text" 
                placeholder="Sobrenome" 
                value={sobrenome} 
                onChange={(e) => setSobrenome(e.target.value)} 
                className="register-input-field-nome"
                />
            </div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="register-input-field"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="register-input-field"
          />
          <button onClick={handleLogin} className="register-button">Entrar</button>
          <p className="register-link">Já tem uma conta? <a href="/">Entrar</a></p>
        </div>
        <img src="/src/assets/loginCards.svg" alt="Login Cards" className="login-cards" />
      </div>
    </div>
  );
};

export default Login;
