import { useMemo, useState } from "react";
import DoublyLinkedList from "../models/DoublyLinkedList";
import visitedPages from "../data/visitedPages";
import { Link } from "react-router-dom";

function BrowserPage() {
  // Creamos la lista doblemente enlazada
  const history = useMemo(() => {
    const list = new DoublyLinkedList();
    visitedPages.forEach((page) => list.append(page));
    return list;
  }, []);

  // El historial "empieza" en la última página visitada, como en un navegador real
  const [currentNode, setCurrentNode] = useState(() => {
    history.current = history.tail;
    return history.current;
  });

  const handleBack = () => {
    setCurrentNode(history.goBack());
  };

  const handleForward = () => {
    setCurrentNode(history.goForward());
  };

  const currentPage = currentNode?.value;

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Volver al inicio
      </Link>

      <h1>🌐 Historial del navegador</h1>
      <p className="subtitle">
        Implementado con una <strong>Lista Doblemente Enlazada (DoublyLinkedList)</strong>.
        Se puede navegar hacia atrás y hacia adelante gracias a los punteros{" "}
        <code>prev</code> y <code>next</code>.
      </p>

      <div className="browser-bar">
        <button onClick={handleBack} disabled={!history.canGoBack()}>
          ← Atrás
        </button>
        <div className="url-box">{currentPage?.url}</div>
        <button onClick={handleForward} disabled={!history.canGoForward()}>
          Adelante →
        </button>
      </div>

      <div className="player-card">
        <span className="badge">Página actual</span>
        <h2>{currentPage?.title}</h2>
        <p>{currentPage?.url}</p>
      </div>

      <h3>Historial completo ({history.size()} páginas)</h3>
      <ol className="list">
        {history.toArray().map((page) => (
          <li
            key={page.id}
            className={page.id === currentPage?.id ? "active" : ""}
          >
            {page.title} — <span className="muted">{page.url}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BrowserPage;
