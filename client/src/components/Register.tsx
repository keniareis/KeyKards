import React, { useState } from 'react';

const Login: React.FC = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ nome, sobrenome, email, password });
  };

  return (
    <div className="login-container">
      <img src="/src/assets/elipses.svg" alt="" className="background-elipses" />
      <div className="login-box">
        <div className="login-inputs">
          <div className="login-header">
            <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
            <h1>Cadastre-se</h1>
          </div>
          <div className='input-names'>
            <input 
                type="text" 
                placeholder="Nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                className="input-field-nome"
                />
            <input 
                type="text" 
                placeholder="Sobrenome" 
                value={sobrenome} 
                onChange={(e) => setSobrenome(e.target.value)} 
                className="input-field-nome"
                />
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
          <p className="register-link">Já tem uma conta? <a href="/">Entrar</a></p>
        </div>
        <img src="/src/assets/loginCards.svg" alt="Login Cards" className="login-cards" />
      </div>
    </div>
  );
};

export default Login;
