function SearchBar({ query, onQueryChange, topK, onTopKChange }) {
  const quickChips = ["air", "adi", "nike", "vans", ""];

  return (
    <div className="card-panel search-card">
      <h3>🔍 Buscador Inteligente (Prefix Search + Heap)</h3>
      <p className="card-desc">
        Escribe un prefijo para buscar en el <strong>Trie</strong>. El{" "}
        <strong>MaxHeap</strong> ordenará y retornará los <strong>Top K</strong> más populares.
      </p>

      <div className="search-controls">
        <div className="search-input-wrapper">
          <span className="search-icon">🔎</span>
          <input
            type="text"
            placeholder="Buscar por prefijo (ej: 'air', 'adi')..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="search-input"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="clear-btn"
            >
              ×
            </button>
          )}
        </div>

        <div className="topk-wrapper">
          <label htmlFor="topk-select">Top K:</label>
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
        <span className="chips-label">Prueba rápida:</span>
        {quickChips.map((chip) => (
          <button
            key={chip || "todos"}
            type="button"
            onClick={() => onQueryChange(chip)}
            className={`chip-btn ${query === chip ? "active" : ""}`}
          >
            {chip ? `"${chip}"` : "Ver todos"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
