import React from 'react';
import '../assets/css/popup.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
