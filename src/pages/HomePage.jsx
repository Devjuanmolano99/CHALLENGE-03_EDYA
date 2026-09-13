import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page home">
      <h1>Challenge 03 — Listas Enlazadas</h1>
      <p className="subtitle">
        Estructuras de Datos II · Implementación para explorarla:
      </p>

      <div className="cards">
        <Link to="/songs" className="nav-card">
          <span className="icon">🎵</span>
          <h2>Reproductor de canciones</h2>
          <p>Lista Enlazada Simple — navega solo hacia adelante.</p>
        </Link>

        <Link to="/browser" className="nav-card">
          <span className="icon">🌐</span>
          <h2>Historial del navegador</h2>
          <p>Lista Doblemente Enlazada — navega atrás y adelante.</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
