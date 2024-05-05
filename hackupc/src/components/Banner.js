import React from 'react';
import '../Banner.css';

const Banner = ({ onNavigate }) => {
  return (
    <div className="banner">
      <h1>AutoAuto</h1>
      <nav>
        <ul className="nav-links">
          <li><button onClick={() => onNavigate('home')}>Home</button></li>
          <li><button onClick={() => onNavigate('Alumno')}>Alumno</button></li>

          <li><button onClick={() => onNavigate('Login')}>Login</button></li>
          <li><button onClick={() => onNavigate('Admin')}>Administrar usuarios</button></li>
          <li><button onClick={() => onNavigate('Calendario')}>Calendario</button></li>

        </ul>
      </nav>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="Profile Pic" className="profile-pic" />
    </div>
  );
};

export default Banner;