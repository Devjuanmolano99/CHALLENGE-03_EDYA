import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page home">
      <h1>Estructuras de Datos II · Pilas y Colas</h1>
      <p className="subtitle">
        Implementación interactiva en React de estructuras de datos secuenciales.
      </p>

      <div className="cards">
        <Link to="/atm" className="nav-card highlight-card">
          <span className="icon">🏧</span>
          <div className="badge-featured">CHALLENGE 05</div>
          <h2>Cajero Automático (Colas - Queue)</h2>
          <p>
            Estructura <strong>FIFO</strong>. Fila de personas en un cajero con nombre, monto a retirar y fechas de llegada aleatorias.
          </p>
        </Link>

        <Link to="/books" className="nav-card">
          <span className="icon">📚</span>
          <div className="badge-tag">CHALLENGE 04</div>
          <h2>Pila de Libros (Pilas - Stack)</h2>
          <p>
            Estructura <strong>LIFO</strong>. Pila de libros con nombre, ISBN, autor y editorial. Operaciones push, pop y peek.
          </p>
        </Link>
      </div>

      <div className="prev-challenge-section">
        <h3>🔗 Retos de otras ramas:</h3>
        <div className="sub-links">
          <Link to="/songs" className="pill-link">
            🎵 Listas simples (Reproductor)
          </Link>
          <Link to="/browser" className="pill-link">
            🌐 Listas dobles (Navegador)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
