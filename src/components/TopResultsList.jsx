function TopResultsList({ results, query, topK }) {
  return (
    <div className="card-panel results-card">
      <div className="results-header">
        <div>
          <h3>Resultados más populares ({results.length})</h3>
          <p className="card-desc">
            {query ? (
              <span>Mostrando los mejores resultados para <strong>"{query}"</strong>:</span>
            ) : (
              <span>Mostrando el ranking general de productos:</span>
            )}
          </p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty-results">
          <span className="empty-icon">👟</span>
          <h4>No se encontraron productos</h4>
          <p>No hay coincidencias con "{query}". Intenta con otro término.</p>
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
                <span className="score-val">★ {product.popularity}</span>
                <span className="score-label">Puntos</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopResultsList;
