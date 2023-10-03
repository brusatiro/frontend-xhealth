import React from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/header.css'
import logo from '../assets/img/logoXhealth.png'; // Importe sua imagem de logo
import { Link } from 'react-router-dom';

const Header = ({ isLogged }) => {
    return (
        <div>
            <header>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="right">
                    <div className="searchHeader">
                        <input type="text" placeholder="Procurar" />
                        {/* <button>Buscar</button> */}
                    </div>
                    <div className="login">
                        {isLogged ? (
                            <Link to="/login"><button>Entrar</button></Link>
                        ) : (
                            <Link to="/"><button>Sair</button></Link>
                        )}
                    </div>
                </div>
            </header>
            <div className="header-placeholder"></div>
        </div >

    );
};

export default Header;
