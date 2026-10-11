function SearchBar({ query, onQueryChange, topK, onTopKChange }) {
  const suggestions = ["air", "adidas", "nike", "vans", ""];

  return (
    <div className="card-panel search-card">
      <h3>Buscar productos</h3>
      <p className="card-desc">
        Escribe las primeras letras del nombre para filtrar los productos disponibles.
      </p>

      <div className="search-controls">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Escribe para buscar (ej: air, adidas)..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="search-input"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="clear-btn"
              title="Borrar texto"
            >
              ×
            </button>
          )}
        </div>

        <div className="topk-wrapper">
          <label htmlFor="topk-select">Mostrar:</label>
          <select
            id="topk-select"
            value={topK}
            onChange={(e) => onTopKChange(Number(e.target.value))}
            className="topk-select"
          >
            <option value={2}>Top 2</option>
            <option value={3}>Top 3</option>
            <option value={5}>Top 5</option>
            <option value={10}>Top 10</option>
          </select>
        </div>
      </div>

      <div className="quick-chips">
        <span className="chips-label">Sugerencias:</span>
        {suggestions.map((item) => (
          <button
            key={item || "todos"}
            type="button"
            onClick={() => onQueryChange(item)}
            className={`chip-btn ${query === item ? "active" : ""}`}
          >
            {item ? item : "Todos"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
