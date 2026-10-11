import SmartSearchEngine from "../models/SearchEngine";

// Datos iniciales para el Smart Search Engine basados en el ejemplo de la diapositiva 21
export const initialProductsList = [
  // Productos exactos del ejemplo de la clase:
  { name: "air max", popularity: 90 },
  { name: "air force", popularity: 95 },
  { name: "air jordan", popularity: 85 },
  { name: "adidas boost", popularity: 80 },

  // Productos adicionales para enriquecer la búsqueda:
  { name: "adidas samba", popularity: 88 },
  { name: "adidas superstar", popularity: 84 },
  { name: "nike dunk", popularity: 92 },
  { name: "nike pegasus", popularity: 76 },
  { name: "new balance 550", popularity: 89 },
  { name: "puma suede", popularity: 72 },
  { name: "vans old skool", popularity: 81 },
  { name: "converse all star", popularity: 83 },
];

export function buildSearchEngine() {
  const engine = new SmartSearchEngine();
  initialProductsList.forEach((prod) => {
    engine.insert(prod.name, prod.popularity);
  });
  return engine;
}

export default buildSearchEngine;
