import React, { useState } from 'react';
import axios from 'axios';

function PatientForm() {
  const [patientData, setPatientData] = useState({
    // Defina os campos do paciente aqui, por exemplo:
    name: '',
    gender: '',
    birthDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Use axios.post para criar um paciente no backend
      await axios.post('https://xhealth-fhirservice.fhir.azurehealthcareapis.com/Patient', patientData);

      // Limpe o formulário após a criação bem-sucedida
      setPatientData({
        name: '',
        gender: '',
        birthDate: '',
      });
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
    }
  };

  return (
    <div>
      <h2>Criar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gênero:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={patientData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input
            type="text"
            id="birthDate"
            name="birthDate"
            value={patientData.birthDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Criar Paciente</button>
      </form>
    </div>
  );
}

export default PatientForm;
