import React, { useState } from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/upload.css'
import iconDownload from '../assets/img/iconDownload.svg';
import iconCompleted from '../assets/img/iconCompleted.svg';
import iconLoading from '../assets/img/iconLoading.svg';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Upload = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="inicialContentUpload">
                <div className='textContentUpload'>
                    <h1>Seus dados foram enviados com sucesso!</h1>
                    <h3>Aguarde um instante para receber o Laudo</h3>
                    <div className='loading'>
                        <img src={iconLoading} alt="Ícone para representar um 'Carregando'" />
                        <p>Acessando base de dados</p>
                    </div>
                    <div className='loading'>
                        <img src={iconLoading} alt="Ícone para representar um 'Carregando'" />
                        <p>Compilando resultados</p>
                    </div>
                    <div className='loading'>
                        <img src={iconLoading} alt="Ícone para representar um 'Carregando'" />
                        <p>Gerando laudo</p>
                    </div>
                    <div className='loading'>
                        <img src={iconCompleted} alt="Ícone para representar um 'Concluído'" />
                        <p>Laudo concluído</p>
                    </div>
                    <div className='download'>
                        <img src={iconDownload} alt="Ícone para representar um Download" />
                        <p>Baixar Laudo</p>
                    </div>
                    <Link to="/laudo"><button>Visualizar laudo completo</button></Link>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Upload;












