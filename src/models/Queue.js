/**
 * Implementación de la estructura de datos Cola (Queue)
 * Basada en el principio FIFO (First In, First Out) - El primero en entrar es el primero en salir.
 * 
 * Métodos estándar requeridos:
 * - enqueue: Añade un elemento al final de la cola.
 * - dequeue: Remueve y devuelve el primer elemento de la cola.
 * - peek: Retorna el primer elemento de la cola sin removerlo.
 * - isEmpty: Verifica si la cola está vacía.
 * - size: Retorna el número de elementos en la cola.
 * - print: Imprime los elementos de la cola en consola.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue: Agrega un nuevo elemento al final de la cola
  enqueue(element) {
    this.items.push(element);
    return this;
  }

  // dequeue: Remueve y retorna el primer elemento de la cola (FIFO)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // peek: Retorna el primer elemento sin removerlo de la cola
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // isEmpty: Retorna true si la cola no tiene elementos
  isEmpty() {
    return this.items.length === 0;
  }

  // size: Retorna la cantidad de elementos en la cola
  size() {
    return this.items.length;
  }

  // print: Imprime los elementos en consola
  print() {
    console.log("Estado de la Cola:", this.items);
  }

  // toArray: Retorna una copia en arreglo de los elementos (para renderizado en React)
  toArray() {
    return [...this.items];
  }

  // clear: Vacía la cola
  clear() {
    this.items = [];
  }
}

export default Queue;
