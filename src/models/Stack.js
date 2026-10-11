/**
 * Implementación de la estructura de datos Pila (Stack)
 * Basada en el principio LIFO (Last In, First Out) - El último en entrar es el primero en salir.
 * 
 * Métodos estándar requeridos:
 * - push: Añade un elemento en el tope de la pila.
 * - pop: Remueve y devuelve el elemento del tope.
 * - peek: Retorna el elemento del tope sin removerlo.
 * - isEmpty: Verifica si la pila está vacía.
 * - size: Retorna la cantidad de elementos.
 * - print: Imprime los elementos en consola.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // push: Añade un nuevo valor al tope de la pila
  push(element) {
    this.items.push(element);
    return this;
  }

  // pop: Remueve y retorna el último valor ingresado (LIFO)
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // peek: Retorna el valor del tope sin removerlo
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: Retorna true si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // size: Retorna el número de elementos en la pila
  size() {
    return this.items.length;
  }

  // print: Imprime el contenido en consola
  print() {
    console.log("Contenido de la Pila (Tope -> Base):", [...this.items].reverse());
  }

  // toArray: Retorna una copia en arreglo (tope primero para visualización natural)
  toArray() {
    return [...this.items];
  }

  // clear: Vacía la pila
  clear() {
    this.items = [];
  }
}

export default Stack;
