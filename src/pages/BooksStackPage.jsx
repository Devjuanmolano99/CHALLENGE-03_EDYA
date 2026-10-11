import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Stack from "../models/Stack";
import mockBooks from "../data/mockBooks";
import BookForm from "../components/books/BookForm";
import BookStackDisplay from "../components/books/BookStackDisplay";

function BooksStackPage() {
  const initialStack = useMemo(() => {
    const s = new Stack();
    mockBooks.forEach((b) => s.push(b));
    return s;
  }, []);

  const [stackInstance, setStackInstance] = useState(initialStack);
  const [booksList, setBooksList] = useState(() => initialStack.toArray());

  const handleAddBook = (newBook) => {
    stackInstance.push(newBook);
    setBooksList(stackInstance.toArray());
  };

  const handlePopBook = () => {
    const popped = stackInstance.pop();
    if (popped) {
      setBooksList(stackInstance.toArray());
    }
  };

  const handleResetMock = () => {
    const s = new Stack();
    mockBooks.forEach((b) => s.push(b));
    setStackInstance(s);
    setBooksList(s.toArray());
  };

  const handleClearStack = () => {
    stackInstance.clear();
    setBooksList([]);
  };

  return (
    <div className="page books-page">
      <div className="navigation-bar">
        <Link to="/" className="back-link">
          ← Volver al inicio
        </Link>
        <Link to="/atm" className="alt-nav-link">
          Ir a Cajero ATM (Queue) →
        </Link>
      </div>

      <div className="section-header">
        <h1>📚 Pila de Libros (Stack)</h1>
        <p className="subtitle">
          Challenge 04 · Implementación de estructura <strong>LIFO (Last In, First Out)</strong> con operaciones <code>push</code>, <code>pop</code> y <code>peek</code>.
        </p>
      </div>

      <div className="atm-main-grid">
        <BookForm onAddBook={handleAddBook} />
        <BookStackDisplay
          books={booksList}
          onPopBook={handlePopBook}
          onResetMock={handleResetMock}
          onClearStack={handleClearStack}
        />
      </div>
    </div>
  );
}

export default BooksStackPage;
