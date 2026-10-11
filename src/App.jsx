import { useState, useMemo } from "react";
import buildMenuTree from "./data/menuTree";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  // Construimos el árbol N-ario una sola vez
  const menuTree = useMemo(() => buildMenuTree(), []);

  // Buscamos "Security & Privacy" para dejarlo seleccionado por defecto igual que en la diapositiva
  const defaultNode = useMemo(() => {
    const settingsNode = menuTree.children.find((c) => c.title === "Settings");
    const securityNode = settingsNode?.children.find(
      (c) => c.title === "Security & Privacy"
    );
    return securityNode || menuTree.children[0];
  }, [menuTree]);

  const [activeNode, setActiveNode] = useState(defaultNode);

  const ActiveComponent = activeNode?.component || null;

  return (
    <div className="layout-container">
      {/* 1. Sidebar que imprime el árbol n-ario */}
      <Sidebar
        treeRoot={menuTree}
        activeNode={activeNode}
        onSelectNode={(node) => setActiveNode(node)}
      />

      {/* 2. Área principal que renderiza el componente asociado */}
      <main className="main-content">
        <header className="content-header">
          <div className="breadcrumb">
            <span>Árbol N-Ario</span>
            <span className="sep">/</span>
            <span className="active-crumb">{activeNode?.title}</span>
          </div>
          <div className="node-route-badge">
            Ruta: <code>{activeNode?.link}</code>
          </div>
        </header>

        <section className="view-panel">
          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <div className="no-view">
              <h3>Selecciona una opción del menú</h3>
              <p>Cada nodo hoja del árbol carga un componente independiente.</p>
            </div>
          )}
        </section>

        <footer className="footer-info">
          <p>
            <strong>Challenge 09 — Árboles N-Arios (UAO · EDYA)</strong>: Menú lateral generado recursivamente a partir de una estructura <code>TreeNode</code> con título, link y componente.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
