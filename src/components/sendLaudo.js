import React from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/searchPatient.css';
import '../assets/css/sendLaudo.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Send = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='patientContent'>
        <h2>Envio do Laudo</h2>
        <div className='confirmData'>
          <h3>Confirme os dados do paciente</h3>
          <form>
            <div className='confirmDataPatient'>
              <div className='nome'>
                <label>Nome Completo</label>
                <p>Bruna Satiro</p>
              </div>
              <div className='data'>
                <label>Data de Nascimento</label>
                <p>2003-01-18</p>
              </div>
              <div className='genero'>
                <label>Gênero</label>
                <p>Feminino</p>
              </div>
            </div>
            <div className='confirmDataPatient2'>
              <div className='telefone'>
                <label>Telefone</label>
                <p>(11) 99999-8888</p>
              </div>
              <div className='endereco'>
                <label>Endereço</label>
                <p>Estrada da Aldeia, 369 - Cotia, SP</p>
              </div>
              <div className='space'>
                <label></label>
                <p></p>
              </div>
            </div>
          </form>

        </div>
        <div>

        
        </div>
        <p>ou</p>
        <div className='informData'>
          <h3>Informe os dados para envio do laudo</h3>
          <div className='informDataResp'>
              <div>
                <label>Whatsapp do paciente ou responsável:</label>
                <input
                  type="text"
                  placeholder="EX: (11) 99565-7868"
                  name="phone"
                  required
                />
              </div>
              <p>ou</p>
              <div>
                <label>E-mail do paciente ou responsável:</label>
                <input
                  type="text"
                  placeholder="EX: bruna@gmail.com"
                  name="address"
                  required
                />
              </div>
            </div>
        </div>
      </div>
      <div className='buttonContinuar'>
        <Link to="/sentSuccess"><button>Enviar para o paciente</button></Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Send;

