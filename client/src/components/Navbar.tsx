import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="navbar">
            <div onClick={() => navigate('/home')} className='name-logo'>
                <img src="/src/assets/logo.svg" alt="logo" />
                <h1>KeyKards</h1>
            </div>
            <div>
                <input type="text" placeholder="Pesquise seus flashcards" className="search-bar" />
            </div>
            <div className="nav-icons">
                <button><img src="/src/assets/home.svg" alt="HomeIcon"/>Home</button>
                <button onClick={() => navigate('/Decks')}><img src="/src/assets/baralho.svg" alt="baralhoIcon" />Baralhos</button>
                <button onClick={toggleDropdown}>
                    <img src="/src/assets/person.svg" alt="person" />
                </button>

                {showDropdown && (
                    <div className="dropdown">
                        <div className="dropdown-item">
                            <img src="/src/assets/gear.svg" alt="config" />
                            <span onClick={() => navigate('/settings')} >Configurações</span>
                        </div>
                        <hr />
                        <div className="dropdown-item">
                            <img src="/src/assets/out.svg" alt="logout" />
                            <span onClick={() => navigate('/')} >Sair</span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
