import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/searchPatient.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

const PatientSearch = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    // Adicione os campos do formulário aqui
    fullName: '',
    birthDate: '',
    gender: '',
    phone: '',
    address: '',
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


  // Função para enviar os dados do paciente para o servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/patients', formData);
      // Aqui você pode tratar a resposta, como exibir uma mensagem de sucesso
      console.log('Paciente cadastrado com sucesso:', response.data);
      // Também pode limpar o formulário após o cadastro
      setFormData({
        fullName: '',
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
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Data de Nascimento</label>
                <input
                  type="text"
                  placeholder="EX: 28/03/2003"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Gênero</label>
                <input
                  type="text"
                  placeholder="EX: Masculino"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
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
                />
              </div>
              <div>
                <label>CEP</label>
                <input
                  type="text"
                  placeholder="EX: 534 Erewhon St PeasantVille, Rainbow, Vic 3999"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <input type="checkbox" id="Checkbox" name="Checkbox" required />
              <label htmlFor="Checkbox">Eu concordo com os termos e condições</label>
            </div>
            {/* <button type="submit">Cadastrar</button> */}
            <button onClick={createPatient}>Cadastrar</button>
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


















// import React, { useState } from 'react';
// import axios from 'axios';
// import '../assets/css/reset.css'
// import '../assets/css/style.css'
// import '../assets/css/searchPatient.css'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Header from './header';
// import Footer from './footer';
// import { Link } from 'react-router-dom';


// const PatientSearch = () => {
//   const [patientId, setPatientId] = useState('');
//   const [patientData, setPatientData] = useState(null);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     birthDate: '',
//     gender: '',
//     phone: '',
//     postalCode: '',
//   });

//   const fetchPatientInfo = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/patients/${patientId}`);
//       setPatientData(response.data);
//       setError(null); // Limpa qualquer erro anterior
//     } catch (error) {
//       console.error('Erro ao buscar informações do paciente:', error);
//       setError('Erro ao buscar informações do paciente. Verifique o ID e tente novamente.');
//       setPatientData(null); // Limpa os dados do paciente em caso de erro
//     }
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/patients', formData);
//       console.log('Paciente cadastrado com sucesso:', response.data);
    
//       setFormData({
//         fullName: '',
//         birthDate: '',
//         gender: '',
//         phone: '',
//         postalCode: '',
//       });
//     } catch (error) {
//       console.error('Erro ao cadastrar paciente:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className='patientContent'>

//         <h2>Dados do Paciente</h2>
//         <div className='searchById'>
//           <h3>Buscar por ID do paciente</h3>
//           <input
//             type="text"
//             placeholder="Id do Paciente"
//             value={patientId}
//             onChange={(e) => setPatientId(e.target.value)}
//           />
//           <button onClick={fetchPatientInfo}>Buscar</button>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {patientData && (
//             <div className='infoPatient'>
//               {/* <h3>Informações do Paciente</h3> */}
//               <p><span>ID:</span> {patientData.id}</p>
//               <p><span>Nome:</span> {patientData.name[0].given.join(' ')} {patientData.name[0].family} </p>
//               <p><span>Gênero:</span> {patientData.gender}</p>
//               <p><span>Data de Nascimento:</span> {patientData.birthDate}</p>
//               <p><span>Endereço:</span> {patientData.address[0].text}</p>
//             </div>
//           )}
//         </div>
//         <p>ou</p>
//         <div className='searchInputs'>
//           <h3>Cadastrar Paciente</h3>
//           {/* <form onSubmit={handleSubmit}> */}
//         <div className='infoCadastroPatient'>
//                         <div>
//                             <label>Nome Completo</label>
//                             <input
//                                 type="text"
//                                 placeholder="EX: Kayke Guedes"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         {/* <div>
//                             <label>CPF:</label>
//                             <input
//                                 type="text"
//                                 placeholder="EX: 503.356.368-88"
//                             />
//                         </div> */}
//                         <div>
//                             <label>Data de Nascimento:</label>
//                             <input
//                                 type="text"
//                                 placeholder="EX: 28/03/2003"
//                                 name="birthDate"
//                                 value={formData.birthDate}
//                                 onChange={handleInputChange}
//                             />
//                             {/* <div className='datePicker'>
//                             <DatePicker 
//                             selected={selectedDate}
//                             onChange={handleDateChange}
//                             placeholderText="EX: 28/03/2023"
//                             />
//                           </div> */}
//                         </div>
                          
//                     </div>
//         <div className='infoCadastroPatient'>
//                         <div>
//                             <label>Gênero</label>
//                             <input
//                                 type="text"
//                                 placeholder="EX: Masculino"
//                                 name="gender"
//                                 value={formData.gender}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div>
//                               <label>Telefone</label>
//                               <input
//                                   type="text"
//                                   placeholder="EX: (11) 99565-7868"
//                                   name="phone"
//                                   value={formData.phone}
//                                   onChange={handleInputChange}
//                               />
//                         </div>
//                         <div>
//                             <label>CEP:</label>
//                             <input
//                                 type="text"
//                                 placeholder="EX: 06327-010"
//                                 name="postalCode"
//                                 value={formData.postalCode}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                     </div>
//         </div>
//         <div>
//                         <input type="checkbox" id="Checkbox" name="Checkbox" required />
//                         <label htmlFor="Checkbox">Eu concordo com os termos e condições</label>
//                     </div>
//                     <button type='submit'>Cadastrar</button>
//                           {/* </form> */}

//       {/* </div> */}
// </div>
//       <div className='buttonContinuar'>
//       <Link to="/attach"><button>Continuar</button></Link>
//                     </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default PatientSearch;











// import React, { useState } from 'react';
// import axios from 'axios';

// const PatientSearch = () => {
//   const [patientPhone, setPatientPhone] = useState('');
//   const [patientData, setPatientData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchPatientInfo = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/patientsByPhone?phone=${patientPhone}`);
//       setPatientData(response.data);
//       setError(null); // Limpa qualquer erro anterior
//     } catch (error) {
//       console.error('Erro ao buscar informações do paciente:', error);
//       setError('Erro ao buscar informações do paciente. Verifique o telefone e tente novamente.');
//       setPatientData(null); // Limpa os dados do paciente em caso de erro
//     }
//   };
  

//   return (
//     <div>
//       <h2>Buscar Paciente por Telefone</h2>
//       <input
//         type="text"
//         placeholder="Número de Telefone"
//         value={patientPhone}
//         onChange={(e) => setPatientPhone(e.target.value)}
//       />
//       <button onClick={fetchPatientInfo}>Buscar</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {patientData && (
//         <div>
//           <h3>Informações do Paciente</h3>
//           <p>ID: {patientData.id}</p>
//           <p>Nome: {patientData.name[0].family}, {patientData.name[0].given.join(' ')}</p>
//           <p>Gênero: {patientData.gender}</p>
//           <p>Data de Nascimento: {patientData.birthDate}</p>
//           <p>Endereço: {patientData.address[0].text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;











