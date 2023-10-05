import React, { useState } from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/attach.css'
import '../assets/css/approval.css'
import iconEdit from '../assets/img/iconEdit.svg';
import laudo from '../assets/img/laudo.svg';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Approval = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Aqui você pode implementar a lógica de upload do arquivo, como enviar para um servidor ou realizar uma ação local.
            console.log('Arquivo selecionado:', selectedFile);
        } else {
            console.log('Nenhum arquivo selecionado.');
        }
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='attachContent'>

                <h2>Aprovação de Laudo</h2>
                <div className='approval'>
                    <div className='divApproval'>
                        <img src={laudo} alt="Imagem de exemplo de um laudo" />
                        <p><img src={iconEdit} alt="Ícone para representar um Upload" /> Editar</p>
                        <div className='divMedico'>
                            <label>Médico responsável:</label>
                            <input
                                type="text"
                                placeholder="Insira o nome completo"
                                required
                            />
                        </div>
                        <div className='divCheckbox'>
                            <input type="checkbox" id="Checkbox" name="Checkbox" required />
                            <label htmlFor="Checkbox">Aprovar com assinatura digital</label>
                        </div>
                    </div>

                </div>

            </div>

            <div className='buttonContinuar'>
                <Link to="/sendLaudo"><button>Confirmar dados do paciente</button></Link>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Approval;












