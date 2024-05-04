import React, { useState } from 'react';
import '../Login.css'

const Login = () => {
  // Estado y funciones para "Añadir Alumno"
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar cualquier acción necesaria con el usuario y la contraseña, como autenticar al usuario

    // Después de realizar la acción, puedes restablecer los campos del formulario
    setUsuario('');
    setContraseña('');
    
  };

  return (
    <div className= "content-container">
      <h2>Login</h2>
      {/* Formulario de inicio de sesión */}
      <div className="login-container">
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={handleUsuarioChange}
          
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={handleContraseñaChange}
        />
        <button onClick={handleSubmit}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;