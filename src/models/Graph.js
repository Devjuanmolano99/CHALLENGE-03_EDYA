// Implementación de la estructura de datos Grafo según la diapositiva 7
// - Lista de nodos (nodes)
// - Objeto de adyacencia (adjacencyList)

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  // Agrega un nuevo nodo al grafo (persona o ciudad)
  addNode(node) {
    const exists = this.nodes.find((n) => n.id === node.id);
    if (!exists) {
      this.nodes.push(node);
      this.adjacencyList[node.id] = [];
    }
    return node;
  }

  // Agrega una arista entre dos nodos (origen y destino)
  addEdge(sourceId, targetId, relation = "connected") {
    if (this.adjacencyList[sourceId] && this.adjacencyList[targetId]) {
      // Aristas no dirigidas (relación bidireccional)
      if (!this.adjacencyList[sourceId].some((edge) => edge.target === targetId)) {
        this.adjacencyList[sourceId].push({ target: targetId, relation });
      }
      if (!this.adjacencyList[targetId].some((edge) => edge.target === sourceId)) {
        this.adjacencyList[targetId].push({ target: sourceId, relation });
      }
    }
  }

  // Busca un nodo por su id en la lista de nodos
  findNode(id) {
    return this.nodes.find((n) => n.id === id) || null;
  }

  // Obtiene los nodos adyacentes a un nodo dado
  getAdjacentNodes(id) {
    const edges = this.adjacencyList[id] || [];
    return edges.map((edge) => {
      const node = this.findNode(edge.target);
      return { ...node, relation: edge.relation };
    });
  }

  // Imprime la lista de adyacencia en consola
  print() {
    console.log("Lista de adyacencia del Grafo:", this.adjacencyList);
  }

  // Requerimiento: Obtener y listar las personas que viven en una ciudad en particular
  getPeopleInCity(cityName) {
    return this.nodes.filter(
      (n) => n.type === "person" && n.city === cityName
    );
  }

  // Retorna todas las ciudades registradas en el grafo
  getCities() {
    return this.nodes.filter((n) => n.type === "city");
  }

  // Retorna todas las personas registradas en el grafo
  getPeople() {
    return this.nodes.filter((n) => n.type === "person");
  }

  // Convierte el grafo al formato esperado por react-d3-graph
  toD3GraphData() {
    const nodes = this.nodes.map((node) => {
      const isCity = node.type === "city";
      return {
        id: node.id,
        name: isCity ? node.name : `${node.name} (${node.age} años)`,
        color: isCity ? "#38bdf8" : "#10b981", // Azul para ciudades, verde para personas
        size: isCity ? 550 : 350,
        symbolType: isCity ? "diamond" : "circle",
        type: node.type,
        city: node.city || null,
        age: node.age || null,
      };
    });

    const links = [];
    const addedLinks = new Set();

    Object.keys(this.adjacencyList).forEach((sourceId) => {
      this.adjacencyList[sourceId].forEach((edge) => {
        const key1 = `${sourceId}-${edge.target}`;
        const key2 = `${edge.target}-${sourceId}`;

        if (!addedLinks.has(key1) && !addedLinks.has(key2)) {
          links.push({
            source: sourceId,
            target: edge.target,
            color: edge.relation === "lives_in" ? "#38bdf8" : "#a855f7", // Azul vive en, morado amistad
          });
          addedLinks.add(key1);
        }
      });
    });

    return { nodes, links };
  }
}

export default Graph;
