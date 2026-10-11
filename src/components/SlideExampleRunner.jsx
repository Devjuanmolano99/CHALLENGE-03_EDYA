function SlideExampleRunner({ onRunExample }) {
  return (
    <div className="card-panel example-card">
      <h4>Búsqueda rápida</h4>
      <p className="card-desc">Consulta los 2 productos más populares con "air":</p>

      <button
        type="button"
        onClick={() => onRunExample("air", 2)}
        className="test-btn"
      >
        Buscar "air" (Top 2)
      </button>
    </div>
  );
}

export default SlideExampleRunner;
