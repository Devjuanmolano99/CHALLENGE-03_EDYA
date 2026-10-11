import { useState, useMemo } from "react";
import buildSearchEngine from "./data/initialProducts";
import SearchBar from "./components/SearchBar";
import TopResultsList from "./components/TopResultsList";
import AddProductForm from "./components/AddProductForm";
import SlideExampleRunner from "./components/SlideExampleRunner";
import "./App.css";

function App() {
  // Inicializamos el motor Trie + Heap una sola vez
  const engine = useMemo(() => buildSearchEngine(), []);

  // Forzar actualización cuando se inserten nuevos productos
  const [version, setVersion] = useState(0);

  // Por defecto iniciamos con "air" y K=2 para que muestre exactamente el ejemplo de la diapositiva
  const [query, setQuery] = useState("air");
  const [topK, setTopK] = useState(2);

  // Ejecutamos la búsqueda inteligente: Trie (prefijo) + MaxHeap (Top K)
  const results = useMemo(() => {
    return engine.searchTopK(query, topK);
  }, [engine, query, topK, version]);

  // Manejador para insertar producto
  const handleAddProduct = (name, popularity) => {
    engine.insert(name, popularity);
    setVersion((v) => v + 1);
  };

  // Manejador para ejecutar el caso de prueba de la diapositiva
  const handleRunExample = (prefix, k) => {
    setQuery(prefix);
    setTopK(k);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-badge">Estructuras de Datos II · UAO</div>
        <h1>⚡ Challenge 11 — Smart Search Engine + Top Results</h1>
        <p className="subtitle">
          Búsqueda por prefijo mediante <strong>Trie</strong> y extracción de los{" "}
          <strong>Top K</strong> más populares usando <strong>MaxHeap</strong>.
        </p>
      </header>

      <div className="content-grid">
        {/* Columna Principal: Búsqueda y Resultados Top K */}
        <main className="main-column">
          <SearchBar
            query={query}
            onQueryChange={(q) => setQuery(q)}
            topK={topK}
            onTopKChange={(k) => setTopK(k)}
          />

          <TopResultsList
            results={results}
            query={query}
            topK={topK}
          />
        </main>

        {/* Columna Lateral: Agregar productos y caso de prueba oficial */}
        <aside className="sidebar-column">
          <SlideExampleRunner onRunExample={handleRunExample} />

          <AddProductForm onAddProduct={handleAddProduct} />
        </aside>
      </div>

      <footer className="footer-bar">
        <p>
          <strong>Challenge 11 (EDYA)</strong>: Los productos se almacenan en un árbol de caracteres <code>Trie</code> (búsqueda O(L)) y los K más populares se extraen con un montículo <code>MaxHeap</code> (extracción O(K log N)).
        </p>
      </footer>
    </div>
  );
}

export default App;
