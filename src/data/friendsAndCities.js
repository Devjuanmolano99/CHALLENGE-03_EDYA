import Graph from "../models/Graph";

// Datos iniciales para construir el grafo de amigos y ciudades
export function buildInitialGraph() {
  const graph = new Graph();

  // 1. Ciudades (Cada ciudad es un nodo con nombre)
  const cities = ["Cali", "Bogotá", "Medellín", "Barranquilla"];
  cities.forEach((cityName) => {
    graph.addNode({
      id: cityName,
      name: cityName,
      type: "city",
    });
  });

  // 2. Personas (Cada persona es un nodo con nombre, edad y referenciada a una ciudad)
  const people = [
    { name: "Juan Manuel", age: 21, city: "Cali" },
    { name: "Carlos Mario", age: 23, city: "Cali" },
    { name: "Valentina", age: 20, city: "Cali" },
    { name: "Andrés Felipe", age: 24, city: "Bogotá" },
    { name: "Laura Sofía", age: 22, city: "Bogotá" },
    { name: "Mateo", age: 25, city: "Medellín" },
    { name: "Camila", age: 21, city: "Medellín" },
    { name: "Santiago", age: 23, city: "Barranquilla" },
  ];

  people.forEach((p) => {
    // Agregamos la persona como nodo
    graph.addNode({
      id: p.name,
      name: p.name,
      age: p.age,
      city: p.city,
      type: "person",
    });

    // Conectamos a la persona con su ciudad donde vive
    graph.addEdge(p.name, p.city, "lives_in");
  });

  // 3. Relaciones de amistad entre personas ("graph of friends")
  graph.addEdge("Juan Manuel", "Carlos Mario", "friend");
  graph.addEdge("Juan Manuel", "Valentina", "friend");
  graph.addEdge("Carlos Mario", "Mateo", "friend");
  graph.addEdge("Andrés Felipe", "Laura Sofía", "friend");
  graph.addEdge("Mateo", "Camila", "friend");
  graph.addEdge("Valentina", "Laura Sofía", "friend");
  graph.addEdge("Santiago", "Juan Manuel", "friend");

  return graph;
}

export default buildInitialGraph;
