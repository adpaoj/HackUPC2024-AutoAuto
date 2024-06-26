import React, { useState } from 'react';
import '../Admin.css'; // Importar el archivo CSS
import { addUser, deleteUser } from '../dbOperations';

async function crearUser(nombre, dni, correo, telefono) 
{
  const newUser = {id: dni, name: nombre, email: correo, phoneNumber: telefono};
  const result = await addUser(newUser);
  if (result) {
    const { data: addedUser, error: addUserError } = result;
    console.log('Added:', addedUser, 'Error:', addUserError);
  } else {
    console.error('Error: addUser result is undefined');
  }
}

async function eliminarUser(correo)
{
  const result = await deleteUser(correo);
  if (result) {
    const { data: deletedUser, error: deleteUserError } = result;
    console.log('Deleted:', deletedUser, 'Error:', deleteUserError);
  } else {
    console.error('Error: deleteUser result is undefined');
  }
}

const Admin = () => {
  // Estado y funciones para "Añadir Alumno"
  const [mostrarAñadir, setMostrarAñadir] = useState(false);
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [dniAlumno, setDniAlumno] = useState('');
  const [correoAlumno, setCorreoAlumno] = useState('');
  const [telefonoAlumno, setTelefonoAlumno] = useState('');

  const toggleMostrarAñadir = () => {
    setMostrarAñadir(!mostrarAñadir);
  };

  const handleNombreAlumnoChange = (event) => {
    setNombreAlumno(event.target.value);
  };

  const handleDniAlumnoChange = (event) => {
    setDniAlumno(event.target.value);
  };

  const handleCorreoAlumnoChange = (event) => {
    setCorreoAlumno(event.target.value);
  };

  const handleTelefonoAlumnoChange = (event) => {
    setTelefonoAlumno(event.target.value);
  };

  const handleAgregarAlumno = () => {
    // Aquí puedes realizar cualquier acción necesaria, como enviar los datos del alumno a la base de datos
    crearUser(nombreAlumno, dniAlumno, correoAlumno, telefonoAlumno);
    // Después de realizar la acción, puedes restablecer los campos del formulario y ocultar el formulario
    setNombreAlumno('');
    setDniAlumno('');
    setCorreoAlumno('');
    setTelefonoAlumno('');
    setMostrarAñadir(false);
  };

  // Estado y funciones para "Eliminar Alumno"
  const [mostrarEliminar, setMostrarEliminar] = useState(false);
  const [correoAlumnoEliminar, setcorreoAlumnoEliminar] = useState('');

  const toggleMostrarEliminar = () => {
    setMostrarEliminar(!mostrarEliminar);
  };

  const handleDniAlumnoEliminarChange = (event) => {
    setcorreoAlumnoEliminar(event.target.value);
  };

  const handleEliminarAlumno = () => {
    // Aquí puedes realizar cualquier acción necesaria para eliminar al alumno con el DNI proporcionado

    // Después de realizar la acción, puedes restablecer el campo del formulario y ocultar el formulario
    setcorreoAlumnoEliminar('');
    setMostrarEliminar(false);
    eliminarUser(correoAlumnoEliminar);
  };

  return (
    <div className='content-container-ad'>
      <h2>Administrar usuarios</h2>
      {/* Casilla "Añadir Alumno" */}
      <div className="añadirAlumno" onClick={toggleMostrarAñadir}>
        <p> + Añadir Alumno</p>
      </div>
      {mostrarAñadir && (
        <div>
          <input
            type="text"
            placeholder="Nombre del alumno"
            value={nombreAlumno}
            onChange={handleNombreAlumnoChange}
            className="inputNombre"
          />
          <input
            type="text"
            placeholder="DNI del alumno"
            value={dniAlumno}
            onChange={handleDniAlumnoChange}
            className="inputDni"
          />
          <input
            type="email"
            placeholder="Correo electrónico del alumno"
            value={correoAlumno}
            onChange={handleCorreoAlumnoChange}
            className="inputCorreo"
          />
          <input
            type="tel"
            placeholder="Teléfono del alumno"
            value={telefonoAlumno}
            onChange={handleTelefonoAlumnoChange}
            className="inputTelefon"
          />
          <button onClick={handleAgregarAlumno} className="botonAñadir">Añadir</button>
        </div>
      )}

      {/* Casilla "Eliminar Alumno" */}
      <div className="eliminarAlumno" onClick={toggleMostrarEliminar}>
        <p>- Eliminar Alumno</p>
      </div>
      {mostrarEliminar && (
        <div>
          <input
            type="text"
            placeholder="Correo electronico alumno"
            value={correoAlumnoEliminar}
            onChange={handleDniAlumnoEliminarChange}
            className="outputCorreo"
          />
          <button onClick={handleEliminarAlumno} className="botonEliminar">Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default Admin;