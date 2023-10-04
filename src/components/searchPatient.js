import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/searchPatient.css';
import '../assets/css/popup.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Popup from './popup';

const PatientSearch = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',      // Nome Completo
    birthDate: '',     // Data de Nascimento
    gender: '',        // Gênero
    phone: '',         // Telefone
    address: '',       // Endereço
  });


  const fetchPatientInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/patients/${patientId}`);
      setPatientData(response.data);
      setError(null); // Limpa qualquer erro anterior
    } catch (error) {
      console.error('Erro ao buscar informações do paciente:', error);
      setError('Erro ao buscar informações do paciente. Verifique o ID e tente novamente.');
      setPatientData(null); // Limpa os dados do paciente em caso de erro
    }
  };

  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do pop-up
  const [popupMessage, setPopupMessage] = useState(''); // Mensagem a ser exibida no pop-up


  // Função para enviar os dados do paciente para o servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/patients', formData);
      // Aqui você pode tratar a resposta, como exibir uma mensagem de sucesso
      console.log('Paciente cadastrado com sucesso:', response.data);

      // Configurar a mensagem de sucesso para o pop-up
      setPopupMessage('Paciente cadastrado com sucesso: ' + response.data.patientId);

      // Mostrar o pop-up
      setShowPopup(true);

      // Também pode limpar o formulário após o cadastro
      setFormData({
        name: '',
        birthDate: '',
        gender: '',
        phone: '',
        address: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
      // Trate os erros de acordo com sua necessidade, exibindo uma mensagem de erro, por exemplo.
    }
  };

  const closePopup = () => {
    // Função para fechar o pop-up
    setShowPopup(false);
  };

  // Função para lidar com as mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createPatient = async () => {
    try {
      const response = await axios.post('http://localhost:8080/patients', formData);
      setPatientData(response.data);
      setError(null); // Limpa qualquer erro anterior
    } catch (error) {
      console.error('Erro ao criar um novo paciente:', error);
      setError('Erro ao criar um novo paciente. Verifique os campos e tente novamente.');
      setPatientData(null); // Limpa os dados do paciente em caso de erro
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='patientContent'>
        <h2>Dados do Paciente</h2>
        <div className='searchById'>
          <h3>Buscar por ID do paciente</h3>
          <input
            type="text"
            placeholder="Id do Paciente"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <button onClick={fetchPatientInfo}>Buscar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {patientData && patientData.name && (
            <div className='infoPatient'>
              <p><span>ID:</span> {patientData.id}</p>
              <p><span>Nome:</span> {patientData.name[0].given.join(' ')} {patientData.name[0].family} </p>
              <p><span>Gênero:</span> {patientData.gender}</p>
              <p><span>Data de Nascimento:</span> {patientData.birthDate}</p>
              <p><span>Endereço:</span> {patientData.address[0].text}</p>
            </div>
          )}

        </div>
        <div>

          {showPopup && (
            <Popup message={popupMessage} onClose={closePopup} />
          )}
        </div>
        <p>ou</p>
        <div className='searchInputs'>
          <h3>Cadastrar Paciente</h3>
          <form onSubmit={handleSubmit}>
            <div className='infoCadastroPatient'>
              <div>
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder="EX: Kayke Guedes"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Data de Nascimento</label>
                <input
                  type="text"
                  placeholder="EX: 1995-01-18"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Gênero</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>Selecione</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
              </div>
            </div>
            <div className='infoCadastroPatient'>
              <div>
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="EX: (11) 99565-7868"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder="EX: Av. Paulista, 1294 - Bela Vista, São Paulo - SP"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <input type="checkbox" id="Checkbox" name="Checkbox" required />
              <label htmlFor="Checkbox">Eu concordo com os termos e condições</label>
            </div>
            {/* <button type="submit">Cadastrar</button> */}
            <button className='buttonCadastrar' onClick={() => createPatient(formData)}>Cadastrar</button>
          </form>
        </div>
      </div>
      <div className='buttonContinuar'>
        <Link to="/attach"><button>Continuar</button></Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PatientSearch;

