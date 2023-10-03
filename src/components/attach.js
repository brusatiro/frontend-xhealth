import React, { useState } from 'react';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/attach.css'
import iconUpload from '../assets/img/iconUpload.svg';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Attach = () => {

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

        <h2>Anexar Raio-X</h2>
        <div className='attach'>
          <h3>Coloque o Raio-X a ser analisado em um PDF e faça o anexo abaixo:</h3>

          <div className='divAttach'>
            <img src={iconUpload} alt="Ícone para representar um Upload" />
            <button className='doUpload'><input
              type="file"
              id="fileInput" // Um ID para o campo de entrada de arquivo
              accept=".jpg, .jpeg, .png" // Tipos de arquivo aceitos (opcional)
              onChange={handleFileChange}
              style={{ display: 'none' }} // Esconde o campo de entrada de arquivo
            />
              <label htmlFor="fileInput" className="custom-file-input">
                {selectedFile ? selectedFile.name : 'Escolha um arquivo'}
              </label></button>
            <p>ou</p>
            <p>Arraste o documento aqui</p>
          </div>

        </div>

      </div>

      <div className='buttonContinuar'>
      <Link to="/upload"><button>Enviar Raio-X para IA</button></Link>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Attach;












