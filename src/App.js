import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Routes em vez de Switch
import PatientSearch from './components/searchPatient';
import Home from './components/home';
import Login from './components/login';
import Upload from './components/upload';
import Attach from './components/attach';
import Laudo from './components/laudo';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<PatientSearch />} />
        <Route path="/attach" element={<Attach />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/laudo" element={<Laudo />} />
      </Routes>
    </Router>
  );
}



export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
