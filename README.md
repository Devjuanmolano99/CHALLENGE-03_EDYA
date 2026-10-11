# Challenge 11 — Smart Search Engine (Tries & Heaps)

Proyecto en React que resuelve el **Challenge 11** de la materia **Estructuras de Datos II** (Tries y Montículos / Heaps).

---

## 📌 Enunciado
> *"Create a Smart search engine + Top results*  
> *- Save products in a Trie*  
> *- Allow searching by prefix*  
> *- Use a Heap to return the Top K most popular*  
> *- Each product has: `{ name: "air max", popularity: 95 }`*  
>  
> *Example:*  
> `insert("air max", 90)`  
> `insert("air force", 95)`  
> `insert("air jordan", 85)`  
> `insert("adidas boost", 80)`  
>  
> `searchTopK("air", 2):`  
> `[`  
> `  { name: "air force", popularity: 95 },`  
> `  { name: "air max", popularity: 90 }`  
> `]`"

---

## 🛠️ Estructuras implementadas

1. **Trie (`src/models/Trie.js`)**:
   - Árbol de caracteres con nodos encadenados.
   - `insert(name, popularity)`: Almacena productos carácter por carácter con `isEndOfWord`.
   - `searchByPrefix(prefix)`: Encuentra eficientemente todos los productos que inician con un prefijo mediante recorrido DFS.

2. **MaxHeap (`src/models/MaxHeap.js`)**:
   - Implementación de montículo binario completo sobre un arreglo (ordenado por popularidad).
   - Métodos: `push`, `pop`, `peek`, `heapify`, `percolateUp`, `percolateDown`, `size`, `isEmpty`.

3. **Smart Search Engine (`src/models/SearchEngine.js`)**:
   - `searchTopK(prefix, k)`:
     1. Filtra los productos con el **Trie** según el prefijo ingresado.
     2. Construye el **MaxHeap** con los productos coincidentes (`heapify`).
     3. Extrae los **K** elementos más populares ejecutando `pop()` en el montículo.

---

## 🚀 Ejecución

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` en tu navegador para interactuar con el buscador en tiempo real.
