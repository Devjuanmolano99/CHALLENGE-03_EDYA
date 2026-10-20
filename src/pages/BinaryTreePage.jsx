import { useState, useMemo, useEffect } from "react";
import BinarySearchTree from "../models/BinarySearchTree";
import { DEFAULT_NUMBERS } from "../data/treeData";
import BinaryTreeVisualizer from "../components/tree/BinaryTreeVisualizer";

export default function BinaryTreePage() {
  const treeInstance = useMemo(() => {
    const tree = new BinarySearchTree();
    DEFAULT_NUMBERS.forEach((n) => tree.insert(n));
    return tree;
  }, []);

  const [inputVal, setInputVal] = useState("");
  const [version, setVersion] = useState(0);
  const [activeTraversal, setActiveTraversal] = useState("all");
  const [traversalResult, setTraversalResult] = useState(null);

  // Ejecución y log en consola al cargar y actualizar
  useEffect(() => {
    const pre = treeInstance.preOrder();
    const inO = treeInstance.inOrder();
    const post = treeInstance.postOrder();

    console.log("--- Estado del Árbol Binario ---");
    console.log("PreOrder:  ", pre);
    console.log("InOrder:   ", inO);
    console.log("PostOrder: ", post);
  }, [version, treeInstance]);

  const handleInsert = (e) => {
    e.preventDefault();
    const parsed = Number(inputVal);
    if (!isNaN(parsed) && inputVal.trim() !== "") {
      treeInstance.insert(parsed);
      setInputVal("");
      setVersion((v) => v + 1);
    }
  };

  const handleReset = () => {
    treeInstance.clear();
    DEFAULT_NUMBERS.forEach((n) => treeInstance.insert(n));
    setVersion((v) => v + 1);
    setActiveTraversal("all");
    setTraversalResult(null);
  };

  const handleClear = () => {
    treeInstance.clear();
    setVersion((v) => v + 1);
    setTraversalResult(null);
  };

  const runPreOrder = () => {
    const res = treeInstance.preOrder();
    setActiveTraversal("pre");
    setTraversalResult({ type: "Pre-Orden (Raíz → Izq → Der)", list: res });
    console.log("PreOrder: ", res);
  };

  const runInOrder = () => {
    const res = treeInstance.inOrder();
    setActiveTraversal("in");
    setTraversalResult({ type: "In-Orden (Izq → Raíz → Der)", list: res });
    console.log("InOrder: ", res);
  };

  const runPostOrder = () => {
    const res = treeInstance.postOrder();
    setActiveTraversal("post");
    setTraversalResult({ type: "Post-Orden (Izq → Der → Raíz)", list: res });
    console.log("PostOrder: ", res);
  };

  const preList = treeInstance.preOrder();
  const inList = treeInstance.inOrder();
  const postList = treeInstance.postOrder();

  return (
    <div className="page bst-page">
      <header className="bst-header">
        <span className="badge">Estructuras de Datos II</span>
        <h1>🌳 Árbol Binario de Búsqueda (BST)</h1>
        <p className="subtitle">
          Inserción ordenada de claves numéricas y algoritmos de recorrido en profundidad (Pre-Orden, In-Orden y Post-Orden).
        </p>
      </header>

      {/* Controles interactivos */}
      <section className="bst-controls-card">
        <form onSubmit={handleInsert} className="insert-form">
          <input
            type="number"
            placeholder="Ingrese un número"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="primary-btn">
            + Insertar
          </button>
        </form>

        <div className="btn-actions-group">
          <button onClick={handleReset} className="secondary-btn">
            ↺ Cargar Mocks [50, 30, 70, 20, 40, 60, 80]
          </button>
          <button onClick={handleClear} className="danger-btn">
            ✕ Vaciar Árbol
          </button>
        </div>
      </section>

      {/* Visualización gráfica del árbol */}
      <section className="canvas-card">
        <div className="card-header">
          <h3>Estructura Jerárquica del Árbol</h3>
          <span className="legend-indicator">Azul: Izquierda (&lt;) | Cian: Derecha (&gt;)</span>
        </div>
        <BinaryTreeVisualizer root={treeInstance.root} />
      </section>

      {/* Acciones de Recorridos */}
      <section className="traversals-card">
        <h3>Recorridos del Árbol</h3>
        <div className="traversal-buttons">
          <button
            onClick={runPreOrder}
            className={`traversal-btn ${activeTraversal === "pre" ? "active" : ""}`}
          >
            Pre-Orden
          </button>
          <button
            onClick={runInOrder}
            className={`traversal-btn ${activeTraversal === "in" ? "active" : ""}`}
          >
            In-Orden (Ordenado)
          </button>
          <button
            onClick={runPostOrder}
            className={`traversal-btn ${activeTraversal === "post" ? "active" : ""}`}
          >
            Post-Orden
          </button>
        </div>

        {/* Panel de resultados */}
        <div className="results-grid">
          <div className="result-box">
            <h4>Pre-Orden</h4>
            <div className="tokens-container">
              {preList.map((val, idx) => (
                <span key={idx} className="token token-pre">
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="result-box">
            <h4>In-Orden</h4>
            <div className="tokens-container">
              {inList.map((val, idx) => (
                <span key={idx} className="token token-in">
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="result-box">
            <h4>Post-Orden</h4>
            <div className="tokens-container">
              {postList.map((val, idx) => (
                <span key={idx} className="token token-post">
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
