// Implementación de MaxHeap (Montículo Máximo) según las diapositivas 10-20 de la clase 11
// Se representa mediante un arreglo donde cada nodo padre tiene mayor o igual popularidad que sus hijos.

export class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Índices de navegación en el arreglo del árbol binario completo
  _parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  _leftChildIndex(i) {
    return 2 * i + 1;
  }

  _rightChildIndex(i) {
    return 2 * i + 2;
  }

  // Helper swap: intercambia dos posiciones en el arreglo
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // size: tamaño actual del heap
  size() {
    return this.heap.length;
  }

  // isEmpty: indica si el heap no tiene elementos
  isEmpty() {
    return this.heap.length === 0;
  }

  // peek: retorna el elemento de mayor popularidad sin removerlo
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // push: inserta un nuevo producto y reordena mediante percolateUp
  push(item) {
    this.heap.push(item);
    this.percolateUp(this.heap.length - 1);
    return this;
  }

  // percolateUp: desplaza el nodo hacia arriba mientras su popularidad sea mayor que la de su padre
  percolateUp(index) {
    let current = index;

    while (
      current > 0 &&
      this.heap[current].popularity > this.heap[this._parentIndex(current)].popularity
    ) {
      const parent = this._parentIndex(current);
      this.swap(current, parent);
      current = parent;
    }
  }

  // pop: remueve y retorna el elemento máximo (raíz), reordenando con percolateDown
  pop() {
    if (this.isEmpty()) return null;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    // Reemplazamos la raíz con el último elemento del arreglo
    this.heap[0] = this.heap.pop();
    this.percolateDown(0);

    return max;
  }

  // percolateDown: desplaza el nodo hacia abajo mientras alguno de sus hijos tenga mayor popularidad
  percolateDown(index) {
    let current = index;
    const length = this.heap.length;

    while (this._leftChildIndex(current) < length) {
      let largest = current;
      const left = this._leftChildIndex(current);
      const right = this._rightChildIndex(current);

      if (this.heap[left].popularity > this.heap[largest].popularity) {
        largest = left;
      }

      if (
        right < length &&
        this.heap[right].popularity > this.heap[largest].popularity
      ) {
        largest = right;
      }

      if (largest !== current) {
        this.swap(current, largest);
        current = largest;
      } else {
        break;
      }
    }
  }

  // heapify: convierte un arreglo cualquiera en un MaxHeap
  heapify(array) {
    this.heap = [...array];
    // Empezamos desde el último padre no-hoja hacia la raíz
    const startIdx = Math.floor(this.heap.length / 2) - 1;
    for (let i = startIdx; i >= 0; i--) {
      this.percolateDown(i);
    }
    return this;
  }

  // toArray: retorna una copia del arreglo interno
  toArray() {
    return [...this.heap];
  }
}

export default MaxHeap;
