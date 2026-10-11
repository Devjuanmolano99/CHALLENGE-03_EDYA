# Challenge 11 — Buscador de Productos (Tries & Heaps)

Proyecto en React para la clase de **Estructuras de Datos II**.

---

## 📌 Descripción

El proyecto implementa un buscador de productos combinando dos estructuras de datos:
1. **Trie (Árbol de Prefijos)**: Permite almacenar palabras y buscar todas las coincidencias que comiencen con las letras ingresadas por el usuario.
2. **MaxHeap (Montículo Máximo)**: Organiza las coincidencias por nivel de popularidad y extrae rápidamente los **Top K** productos más destacados.

---

## 🛠️ Estructura del Código

- `src/models/Trie.js`: Implementación de Trie con inserción y búsqueda por prefijo (`searchByPrefix`).
- `src/models/MaxHeap.js`: Montículo binario sobre arreglo con operaciones `push`, `pop`, `heapify`, `percolateUp` y `percolateDown`.
- `src/models/SearchEngine.js`: Integra Trie y MaxHeap para la función `searchTopK(prefix, k)`.
- `src/components/`:
  - `SearchBar.jsx`: Barra de búsqueda y selector de cantidad de resultados.
  - `TopResultsList.jsx`: Listado de los productos ordenados por popularidad.
  - `AddProductForm.jsx`: Formulario para registrar nuevos productos.
  - `SlideExampleRunner.jsx`: Botón de búsqueda rápida.

---

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` en tu navegador.
