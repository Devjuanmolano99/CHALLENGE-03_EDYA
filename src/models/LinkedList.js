// Nodo de la lista enlazada simple 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Lista enlazada simple 
// Métodos (goToHead / next) para poder "reproducir"
// las canciones en orden, avanzando nodo por nodo con un puntero "current".
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null; // puntero para la reproducción actual
  }

  // Agrega un nuevo nodo al final de la lista 
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    // Si es el primer elemento, lo dejamos como canción actual
    if (!this.current) {
      this.current = this.head;
    }

    return this;
  }

  // Busca un nodo por valor 
  peek(value, current = this.head) {
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Retorna el número de elementos 
  size() {
    return this.length;
  }

  // Elimina un nodo por valor 
  remove(value, current = this.head) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
      this.length--;
    }
  }

  // Imprime el contenido de la lista
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  // ---- (reproductor de canciones) ----

  // Ubica el puntero actual al inicio de la lista
  goToHead() {
    this.current = this.head;
    return this.current;
  }

  // Avanza al siguiente nodo (solo hacia adelante)
  goNext() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    } else {
      //  (reproducción en bucle)
      this.current = this.head;
    }
    return this.current;
  }

  // Se convierte la lista en un arreglo
  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

export default LinkedList;
