import React from 'react';
import '../Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="reservar-btn" onClick={onClick}>
      Reservar más clases
    </button>
  );
};

export default Button;