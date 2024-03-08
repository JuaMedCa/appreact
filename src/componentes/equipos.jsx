import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap


function TablaPosiciones() {
  const equipos = [
    { nombre: 'Equipo 1', puntos: 20, partidosJugados: 10 },
    { nombre: 'Equipo 2', puntos: 18, partidosJugados: 10 },
    { nombre: 'Equipo 3', puntos: 15, partidosJugados: 10 },
    { nombre: 'Equipo 4', puntos: 12, partidosJugados: 10 },
    { nombre: 'Equipo 5', puntos: 10, partidosJugados: 10 },
    { nombre: 'Equipo 6', puntos: 9, partidosJugados: 10 },
    { nombre: 'Equipo 7', puntos: 8, partidosJugados: 10 },
    { nombre: 'Equipo 8', puntos: 7, partidosJugados: 10 },
    { nombre: 'Equipo 9', puntos: 6, partidosJugados: 10 },
    { nombre: 'Equipo 10', puntos: 5, partidosJugados: 10 }
  ];

  equipos.sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="container">
      <center><h2 className="text-center texto-pos">Tabla de Posiciones</h2></center>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>Partidos Jugados</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.partidosJugados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPosiciones;
