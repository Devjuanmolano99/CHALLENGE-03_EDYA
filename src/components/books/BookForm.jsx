import { useState } from "react";

function BookForm({ onAddBook }) {
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !isbn.trim() || !author.trim() || !editorial.trim()) {
      setFeedback({ type: "error", message: "Todos los campos son obligatorios." });
      return;
    }

    const newBook = {
      id: "b-" + Date.now(),
      name: name.trim(),
      isbn: isbn.trim(),
      author: author.trim(),
      editorial: editorial.trim(),
    };

    onAddBook(newBook);
    setFeedback({ type: "success", message: `¡"${name}" apilado en el tope (Push)!` });

    setName("");
    setIsbn("");
    setAuthor("");
    setEditorial("");

    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="card-panel">
      <h3>📚 Agregar nuevo libro a la pila (Push)</h3>
      <p className="card-description">
        Ingresa los datos del libro para apilarlo en el <strong>tope</strong> de la estructura (LIFO).
      </p>

      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="book-name">Nombre del Libro</label>
            <input
              id="book-name"
              type="text"
              placeholder="Ej: Estructuras de Datos en JS"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-isbn">Código ISBN</label>
            <input
              id="book-isbn"
              type="text"
              placeholder="Ej: 978-0134685991"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-author">Autor</label>
            <input
              id="book-author"
              type="text"
              placeholder="Ej: Robert Sedgewick"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-editorial">Editorial</label>
            <input
              id="book-editorial"
              type="text"
              placeholder="Ej: Addison-Wesley"
              value={editorial}
              onChange={(e) => setEditorial(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <button type="submit" className="btn primary btn-full">
          📥 Push (Apilar en el Tope)
        </button>

        {feedback && (
          <div className={`feedback-alert ${feedback.type}`}>{feedback.message}</div>
        )}
      </form>
    </div>
  );
}

export default BookForm;
