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

  // Para refrescar la vista cuando se agreguen productos
  const [version, setVersion] = useState(0);

  // Por defecto iniciamos con "air" y Top 2
  const [query, setQuery] = useState("air");
  const [topK, setTopK] = useState(2);

  // Consulta por prefijo en el Trie y extracción Top K con el Heap
  const results = useMemo(() => {
    return engine.searchTopK(query, topK);
  }, [engine, query, topK, version]);

  // Agregar nuevo producto
  const handleAddProduct = (name, popularity) => {
    engine.insert(name, popularity);
    setVersion((v) => v + 1);
  };

  // Acción del botón rápido
  const handleRunExample = (prefix, k) => {
    setQuery(prefix);
    setTopK(k);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Catálogo de Productos</h1>
        <p className="subtitle">
          Búsqueda rápida por nombre y ordenamiento por popularidad.
        </p>
      </header>

      <div className="content-grid">
        {/* Columna Principal: Buscador y Lista de Productos */}
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

        {/* Columna Lateral: Agregar producto y búsqueda rápida */}
        <aside className="sidebar-column">
          <SlideExampleRunner onRunExample={handleRunExample} />

          <AddProductForm onAddProduct={handleAddProduct} />
        </aside>
      </div>

      <footer className="footer-bar">
        <p>
          Desarrollado con estructuras de datos Trie y MaxHeap en React.
        </p>
      </footer>
    </div>
  );
}

export default App;
