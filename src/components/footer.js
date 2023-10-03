import React from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/footer.css'
import logo from '../assets/img/logoXhealth.png'; // Importe sua imagem de logo
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <div className="links">
                    <p>Sobre nós</p>
                    <p>Suporte</p>
                </div>
                <div className="links">
                    <p>© 2023 X-Health</p>
                    <p>Termos e condições</p>
                    <p>Política de Privacidade</p>
                </div>
            </footer>
        </div >

    );
};

export default Footer;
