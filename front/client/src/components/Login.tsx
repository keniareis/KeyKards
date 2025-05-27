import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // lógica de login
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <img src="/src/assets/elipses.svg" alt="" className="background-elipses" />
      <div className="login-box">
        <div className="login-inputs">
          <div className="login-header">
            <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
            <h1>Entrar</h1>
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-field"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input-field"
          />
          <button onClick={handleLogin} className="login-button">Entrar</button>
          <p className="register-link">Não tem uma conta? <a href="/register">Cadastre-se</a></p>
        </div>
        <img src="/src/assets/loginCards.svg" alt="Login Cards" className="login-cards" />
      </div>
    </div>
  );
};

export default Login;
