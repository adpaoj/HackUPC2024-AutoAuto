import React from 'react';
import '../Alumno.css';
import Button from './Button';

const Alumno = () => {
  return(
    <div className='content-container-al'>
      <h2>Alumno</h2>
      <p class = "texto-blanco"> Clases pendientes: 2/10</p>
      <Button />
    </div>
  );
};

export default Alumno;