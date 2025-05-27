import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('usuario@exemplo.com');

  const handleSave = () => {
    // lógica de salvar configurações
    console.log('Configurações salvas');
  };

  return (
    <div className="settings-container">
      <h1>Configurações</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default Settings;
