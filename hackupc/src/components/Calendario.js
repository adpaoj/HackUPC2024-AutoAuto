import React, { useState } from 'react';
import '../Calendario.css';


const Calendario = () => {
  // Generar los bloques de tiempo de 1 hora desde las 8:00 hasta las 20:00
  const horas = [];
  for (let i = 8; i <= 20; i++) {
    horas.push(`${i}:00`);
  }

  // Días de la semana
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Estado para el valor seleccionado en cada celda
  const [selectedOption, setSelectedOption] = useState({});

  // Función para manejar el cambio de opción
  const handleOptionChange = (dia, hora, opcion) => {
    setSelectedOption({
      ...selectedOption,
      [`${dia}-${hora}`]: opcion
    });
  };

  return (
    <div className="calendario-container">
      <div className="calendario">
        {/* Espacio vacío para la esquina superior izquierda */}
        <div className="esquina"></div>
        {/* Días de la semana */}
        {diasSemana.map((dia, index) => (
          <div key={index} className="dia">{dia}</div>
        ))}
        {/* Horas */}
        {horas.map((hora, indexHora) => (
          <React.Fragment key={indexHora}>
            <div className="hora">{hora}</div>
            {/* Celdas vacías para cada hora en los días */}
            {diasSemana.map((dia, indexDia) => (
              <div key={indexDia} className="celda">
                {/* Desplegable de opciones */}
                <select
                  value={selectedOption[`${dia}-${hora}`] || ''}
                  onChange={(e) => handleOptionChange(dia, hora, e.target.value)}
                >
                  <option value=""></option>
                  <option value="Opción 1">Alumno 1</option>
                  <option value="Opción 2">Alumno 2</option>
                  <option value="Opción 3">Alumno 3</option>
                </select>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Calendario;