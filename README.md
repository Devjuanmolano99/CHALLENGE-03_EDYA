# Challenge 10 — Grafo de Amigos y Ciudades

Proyecto en React que resuelve el **Challenge 10** de la materia **Estructuras de Datos II** (Grafos).

---

## 📌 Enunciado
> *"Create and handle new graph of friends and cities.*  
> *Every person should be a node, and every city too.*  
> *Every person must have name and Age, and should be referenced to one city.*  
> *Every city must have a name.*  
> *Print the list of people who lives in a particular City.*  
> *Use react-d3-graph to show the graph in screen (https://www.npmjs.com/package/react-d3-graph)"*

---

## 🛠️ Implementación del Grafo

1. **Modelo `Graph.js`**:
   - Implementado según la diapositiva 7 de clase:
     - `nodes`: Lista de entidades (personas y ciudades).
     - `adjacencyList`: Objeto de adyacencias que mapea conexiones.
   - Métodos:
     - `addNode(node)`: Agrega un nodo al grafo.
     - `addEdge(source, target, relation)`: Agrega aristas no dirigidas entre nodos.
     - `getPeopleInCity(cityName)`: Filtra y retorna las personas que viven en una ciudad determinada.
     - `toD3GraphData()`: Adapta la estructura al formato requerido por `react-d3-graph`.

2. **Tipos de Nodos**:
   - **Ciudades**: Representadas en forma de rombo azul (ej. *Cali*, *Bogotá*, *Medellín*, *Barranquilla*).
   - **Personas**: Nodos circulares verdes con `name`, `age` y referenciadas a su ciudad de residencia.

3. **Tipos de Conexiones (Aristas)**:
   - **Residencia (azul)**: Conecta a una persona con la ciudad en la que vive.
   - **Amistad (morado)**: Conecta dos personas como amigos.

4. **Visualización y Consulta**:
   - Muestra la lista de personas que viven en la ciudad seleccionada.
   - Gráfico de red interactivo con `react-d3-graph` que permite arrastrar nodos, hacer zoom e interactuar haciendo clic sobre ciudades o personas.

---

## 🚀 Ejecución

```bash
npm install --legacy-peer-deps
npm run dev
```

Abre `http://localhost:5173/` en tu navegador.
