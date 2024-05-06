import React, { useState } from 'react';
import '../Login.css'
import supabase from '../supabaseConfig';

const Login = () => {
  // Estado y funciones para "Añadir Alumno"
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setContra(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await supabase.auth.signInWithPassword({
        email: usuario,
        password: contra
      });
  
      const { user, error } = response;

      if (error) {
        console.error('Error de autenticación:', error.message);
      } else {
        console.log('Usuario autenticado:', user);
        // Aquí podrías redirigir al usuario a otra página o cambiar el estado de la aplicación
      }
    } catch (e) {
      console.error('Error al intentar iniciar sesión:', e.message);
    }

    setUsuario('');
    setContra('');
  };

  return (
    <div className= "content-container">
      <h2>Login</h2>
      {/* Formulario de inicio de sesión */}
      <div className="login-container">
        <input
          type="text"
          placeholder="Correo electrónico"
          value={usuario}
          onChange={handleUsuarioChange}
          
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contra}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSubmit}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;