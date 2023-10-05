import React from 'react';
import Header from './header';
import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/home.css'
import iconClinica from '../assets/img/iconClinica.svg';
import iconLab from '../assets/img/iconLab.svg';
import iconHospital from '../assets/img/iconHospital.svg';
import iconPatient from '../assets/img/iconPatient.svg';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <Header isLogged={true}/>
      </div>

      <div className="inicialContent">
        <div className='textContent'>
          <h1>Laudo em 1 minuto!</h1>
          <p>Uma análise feita por nossa IA capaz de interpretar milhares de exames de imagem por segundo e trazer o laudo exato para seu especialista.</p>
          <Link to="/login"><button>Quero utilizar</button></Link>
        </div>
      </div>

      <div className='secondContent'>
        <h2>Quem pode utilizar</h2>
        <div className='itemsLocal'>
          <div className='local'>
            <img src={iconClinica} alt="Ícone para representar uma Clínica" />
            <h3>Clínicas</h3>
            <p>Utilize em sua clínica para trazer ainda mais agilidade em seus atendimentos</p>
          </div>
          <div className='local'>
            <img src={iconLab} alt="Ícone para representar um Laboratório" />
            <h3>Laboratórios</h3>
            <p>Traga rapidez e eficiência em suas pesquisas e ganhe ainda mais resultados</p>
          </div>
          <div className='local'>
            <img src={iconHospital} alt="Ícone para representar um Hospital" />
            <h3>Hospitais</h3>
            <p>Economize o tempo dos pacientes e colaboradores para salvar ainda mais vidas</p>
          </div>
        </div>
        <div className="btnImplantar">
        <Link to="/login"><button>Implantar na minha empresa</button></Link>
        </div>
      </div>

      <div className='thirdContent'>
        <h2>Busque com Agilidade e Segurança</h2>
        <div className='integration'>
          <img src={iconPatient} alt="Ícone para representar um Hospital" />
          <div className='divIntegration'>
            <h3>Nossa integração com o sistema de saúde FHIR te dá informações seguras e atualizadas do paciente!</h3>
            <Link to="/login"><button>Quero saber mais</button></Link>
          </div>
        </div>
      </div>

      <div className="inicialContent">
        <div className='textContent'>
          <h1>Comece Agora</h1>
          <p>Experimente a revolução médica hoje: agende sua demonstração gratuita com a X-Health!</p>
          <Link to="/login"><button>Fale com um de nossos especialistas</button></Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
