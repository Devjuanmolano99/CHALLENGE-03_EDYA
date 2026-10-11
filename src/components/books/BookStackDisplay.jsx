function BookStackDisplay({ books, onPopBook, onResetMock, onClearStack }) {
  // En una pila (LIFO), el tope es el último elemento ingresado.
  // Mostramos el tope arriba para representar visualmente la pila física de libros.
  const stackListReversed = [...books].reverse();
  const topBook = books.length > 0 ? books[books.length - 1] : null;

  return (
    <div className="card-panel">
      <div className="queue-controls-bar">
        <div>
          <h3>📚 Pila de Libros ({books.length} elementos)</h3>
          <p className="card-description">
            Estructura <strong>LIFO (Last In, First Out)</strong>. El último en ingresar está en el tope.
          </p>
        </div>

        <div className="actions-cluster">
          <button
            onClick={onPopBook}
            disabled={books.length === 0}
            className="btn danger"
            title="Remover el libro del tope (Pop)"
          >
            📤 Pop (Desapilar del Tope)
          </button>
          <button onClick={onResetMock} className="btn secondary">
            🔄 Cargar Mocks
          </button>
          <button
            onClick={onClearStack}
            disabled={books.length === 0}
            className="btn secondary"
          >
            🗑️ Vaciar
          </button>
        </div>
      </div>

      {books.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📖</span>
          <h4>La pila está vacía</h4>
          <p>Agrega un nuevo libro usando el formulario o carga los datos de prueba.</p>
        </div>
      ) : (
        <div className="stack-container">
          <div className="stack-top-indicator">
            <span className="counter-badge">▲ TOPE DE LA PILA (PEEK: {topBook?.name})</span>
          </div>

          <div className="stack-items">
            {stackListReversed.map((book, index) => {
              const isTop = index === 0;

              return (
                <div
                  key={book.id}
                  className={`stack-card ${isTop ? "top-card" : ""}`}
                >
                  <div className="stack-spine">
                    <span className="book-index">
                      {isTop ? "🔝 TOPE" : `#${books.length - index}`}
                    </span>
                  </div>

                  <div className="book-info">
                    <h4 className="book-title">{book.name}</h4>
                    <div className="book-meta">
                      <span>✍️ Autor: {book.author}</span>
                      <span>🏢 Editorial: {book.editorial}</span>
                      <span>🏷️ ISBN: <code>{book.isbn}</code></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="stack-base-indicator">
            <span>▼ BASE DE LA PILA</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookStackDisplay;
