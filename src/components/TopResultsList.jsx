function TopResultsList({ results, query, topK }) {
  return (
    <div className="card-panel results-card">
      <div className="results-header">
        <div>
          <h3>🏆 Resultados Top {topK} más populares</h3>
          <p className="card-desc">
            {query ? (
              <span>
                Prefijo consultado: <code>"{query}"</code> ({results.length} encontrados)
              </span>
            ) : (
              <span>Todos los productos ordenados por popularidad en el MaxHeap</span>
            )}
          </p>
        </div>
        <span className="algo-badge">Trie DFS + MaxHeap Pop</span>
      </div>

      {results.length === 0 ? (
        <div className="empty-results">
          <span className="empty-icon">🚫</span>
          <h4>Sin coincidencias en el Trie</h4>
          <p>No se encontraron productos que comiencen con "{query}".</p>
        </div>
      ) : (
        <div className="results-grid">
          {results.map((product, index) => (
            <div key={`${product.name}-${index}`} className="product-card">
              <div className="product-rank">
                <span className="rank-num">#{index + 1}</span>
              </div>

              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <div className="popularity-bar-container">
                  <div
                    className="popularity-bar"
                    style={{ width: `${Math.min(product.popularity, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="product-score">
                <span className="score-val">⭐ {product.popularity}</span>
                <span className="score-label">Popularidad</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopResultsList;
