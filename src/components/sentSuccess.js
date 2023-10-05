import React, { useState } from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/upload.css'
import '../assets/css/laudo.css'
import iconDownload from '../assets/img/iconDownload.svg';
import Header from './header';
import Footer from './footer';


const Success = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="inicialContentLaudo">
                <div className='textContentLaudo'>
                    <h1>Laudo enviado com sucesso!</h1>
                    <div className='download'>
                        <img src={iconDownload} alt="Ícone para representar um Download" />
                        <p>Baixar Laudo</p>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Success;












