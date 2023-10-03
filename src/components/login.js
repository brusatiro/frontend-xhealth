import React, { useState } from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/login.css'
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Login() {

    const [isCadastrarActive, setIsCadastrarActive] = useState(true);

    const handleCadastrarClick = () => {
        setIsCadastrarActive(true);
    };

    const handleEntrarClick = () => {
        setIsCadastrarActive(false);
    };

    return (
        <div>
            <div>
                <Header isLogged={true} />
            </div>

            <div className='loginContent'>

                <div className='toggleButtons'>
                    <button
                        onClick={handleCadastrarClick}
                        className={`my-button ${isCadastrarActive ? 'active' : ''}`}
                    >
                        Cadastrar
                    </button>
                    <button
                        onClick={handleEntrarClick}
                        className={`my-button ${!isCadastrarActive ? 'active' : ''}`}
                    >
                        Entrar
                    </button>
                </div>

                <div className={`content ${isCadastrarActive ? 'show-content' : 'hide-content'}`}>                    <div className='infoCadastro'>
                    <div className='divInput'>
                        <label>CNPJ</label>
                        <input
                            type="text"
                            placeholder="EX: 61.506.882/0001-56"
                        />
                    </div>
                    <div className='divInput'>
                        <label>Razão Social</label>
                        <input
                            type="text"
                            placeholder="EX: Hospital Geral"
                        />
                    </div>
                </div>
                    <div className='titleResponsavel'>
                        <h3>Dados do Responsável</h3>
                    </div>
                    <div className='infoCadastro'>
                        <div className='divInput'>
                            <label>Nome do Responsável</label>
                            <input
                                type="text"
                                placeholder="EX: João da Silva"
                            />
                        </div>
                        <div className='divInput'>
                            <label>CPF do Responsável</label>
                            <input
                                type="text"
                                placeholder="EX: 703.394.490-04"
                            />
                        </div>
                    </div>
                    <div className='infoCadastro'>
                        <div className='divInput'>
                            <label>E-mail do Responsável</label>
                            <input
                                type="text"
                                placeholder="EX: joaodasilva@gmail.com"
                            />
                        </div>
                        <div className='divInput'>
                            <label>Senha</label>
                            <input
                                type="text"
                                placeholder="EX: ••••••••••"
                            />
                        </div>
                    </div>
                </div>

                <div className={`content ${!isCadastrarActive ? 'show-content' : 'hide-content'}`}>                    
                <div className='infoCadastro'>
                    <div className='divInput'>
                        <label>E-mail</label>
                        <input
                            type="text"
                            placeholder="EX: joaodasilva@gmail.com"
                        />
                    </div>
                </div>
                    <div className='infoCadastro'>
                        <div className='divInput'>
                            <label>CNPJ</label>
                            <input
                                type="text"
                                placeholder="EX: 61.506.882/0001-56"
                            />
                        </div>
                    </div>
                    <div className='infoCadastro'>
                        <div className='divInput'>
                            <label>Senha</label>
                            <input
                                type="text"
                                placeholder="EX: ••••••••••"
                            />
                        </div>
                    </div>
                </div>

                <div className='buttonFinals'>
                <Link to="/search"><button>Entrar</button></Link>
                    <div>
                        <input type="checkbox" id="Checkbox" name="Checkbox" />
                        <label htmlFor="Checkbox">Eu concordo com os termos e condições</label>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Login;
