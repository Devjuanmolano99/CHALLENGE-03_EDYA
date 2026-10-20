# Reto — Árboles Binarios de Búsqueda (Binary Search Tree - BST)

Proyecto en React + Vite que implementa la estructura de datos no lineal **Árbol Binario de Búsqueda (BST)** con operaciones de inserción y algoritmos de recorrido en profundidad (**Pre-Orden**, **In-Orden** y **Post-Orden**).

---

## 📌 Fundamentos Teóricos

1. **Propiedad del BST**:
   * Para cada nodo con clave $K$, todos los nodos en su subárbol izquierdo tienen claves menores que $K$.
   * Todos los nodos en su subárbol derecho tienen claves mayores que $K$.

2. **Algoritmos de Recorrido**:
   * **Pre-Orden ($R \to I \to D$)**: Se procesa la raíz actual, luego el subárbol izquierdo recursivamente y finalmente el subárbol derecho.
   * **In-Orden ($I \to R \to D$)**: Se recorre primero el subárbol izquierdo, se procesa la raíz y luego el subárbol derecho. En un BST, este recorrido produce los elementos en **orden ascendente**.
   * **Post-Orden ($I \to D \to R$)**: Se recorre el subárbol izquierdo, luego el subárbol derecho y finalmente se procesa la raíz.

---

## ⚙️ Arquitectura del Código

* **`BSTNode.js`**:
  * Encapsula la clave (`key`) y las referencias a los subárboles (`left`, `right`).
  * Implementa **recursión delegada**: el nodo decide si pasar la inserción a su hijo izquierdo o derecho de manera orientada a objetos.
* **`BinarySearchTree.js`**:
  * Administrador de la raíz (`root`).
  * Expone métodos de alto nivel: `insert(key)`, `preOrder()`, `inOrder()`, `postOrder()`, `has(key)` y `clear()`.
* **Visualización Dinámica**:
  * Componente SVG que calcula dinámicamente las coordenadas espaciales $(x, y)$ de cada nodo y dibuja aristas conectoras.

---

## 🧪 Datos de Prueba

```javascript
const numeros = [50, 30, 70, 20, 40, 60, 80];
```

* **PreOrder:** `[50, 30, 20, 40, 70, 60, 80]`
* **InOrder:** `[20, 30, 40, 50, 60, 70, 80]`
* **PostOrder:** `[20, 40, 30, 60, 80, 70, 50]`

---

## 🚀 Ejecución

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` para interactuar con la visualización gráfica o revisar la salida de consola en las DevTools del navegador.
