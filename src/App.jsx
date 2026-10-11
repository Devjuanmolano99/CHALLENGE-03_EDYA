import { useState, useMemo } from "react";
import buildInitialGraph from "./data/friendsAndCities";
import CityFilter from "./components/CityFilter";
import AddPersonForm from "./components/AddPersonForm";
import GraphView from "./components/GraphView";
import "./App.css";

function App() {
  // Inicializamos el modelo de Grafo una sola vez
  const graph = useMemo(() => buildInitialGraph(), []);

  // Estado para forzar actualización reactiva cuando el grafo muta
  const [version, setVersion] = useState(0);

  // Ciudad seleccionada para imprimir la lista de personas que viven allí
  const [selectedCity, setSelectedCity] = useState("Cali");

  // Nodo actualmente seleccionado para mostrar detalle
  const [selectedNodeInfo, setSelectedNodeInfo] = useState(null);

  // Obtener ciudades y personas actuales
  const cities = graph.getCities();
  const allPeople = graph.getPeople();

  // Requerimiento: Print the list of people who lives in a particular City
  const peopleInCity = graph.getPeopleInCity(selectedCity);

  // Datos formateados para react-d3-graph
  const graphData = graph.toD3GraphData();

  // Manejar clic en nodo del grafo
  const handleNodeClick = (nodeId) => {
    const node = graph.findNode(nodeId);
    if (!node) return;

    setSelectedNodeInfo(node);

    // Si el usuario hace clic en una ciudad en el gráfico, filtramos automáticamente esa ciudad
    if (node.type === "city") {
      setSelectedCity(node.name);
    } else if (node.type === "person" && node.city) {
      setSelectedCity(node.city);
    }
  };

  // Manejar creación de nueva persona
  const handleAddPerson = ({ name, age, city, friendWith }) => {
    // 1. Agregar nodo de persona
    graph.addNode({
      id: name,
      name,
      age,
      city,
      type: "person",
    });

    // 2. Conectar a la ciudad de residencia
    graph.addEdge(name, city, "lives_in");

    // 3. Conectar al amigo si se especificó
    if (friendWith) {
      graph.addEdge(name, friendWith, "friend");
    }

    // Actualizamos versión para re-renderizar
    setVersion((v) => v + 1);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-badge">Estructuras de Datos II · UAO</div>
        <h1>🌐 Challenge 10 — Grafo de Amigos y Ciudades</h1>
        <p className="subtitle">
          Implementación con nodos de personas y ciudades utilizando <code>react-d3-graph</code>.
        </p>
      </header>

      <div className="content-grid">
        {/* Columna Izquierda: Filtro de ciudad y formulario */}
        <aside className="controls-column">
          <CityFilter
            cities={cities}
            selectedCity={selectedCity}
            onSelectCity={(c) => setSelectedCity(c)}
            peopleInCity={peopleInCity}
          />

          <AddPersonForm
            cities={cities}
            allPeople={allPeople}
            onAddPerson={handleAddPerson}
          />
        </aside>

        {/* Columna Derecha: Gráfico visual interactivo */}
        <main className="graph-column">
          <GraphView
            graphData={graphData}
            onNodeClick={handleNodeClick}
            selectedNodeInfo={selectedNodeInfo}
          />
        </main>
      </div>

      <footer className="footer-bar">
        <p>
          <strong>Challenge 10 (EDYA)</strong>: Cada persona es un nodo con nombre y edad conectada a su ciudad de residencia. Las líneas azules indican residencia y las moradas relaciones de amistad.
        </p>
      </footer>
    </div>
  );
}

export default App;
