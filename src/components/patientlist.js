import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      // Use axios.get para buscar a lista de pacientes do backend
      const response = await axios.get('https://seu-backend-fhir.com/Patient');
      setPatients(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            Nome: {patient.name[0].given.join(' ')} {patient.name[0].family}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
