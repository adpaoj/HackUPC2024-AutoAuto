import React from 'react';

const Banner = ({ onNavigate }) => {
  return (
    <div className="banner">
      <h1>AutoAuto</h1>
      <nav>
        <ul>
          <li><button onClick={() => onNavigate('home')}>Home</button></li>
          <li><button onClick={() => onNavigate('Alumno')}>Alumno</button></li>
          <li><button onClick={() => onNavigate('Admin')}>Admin</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;