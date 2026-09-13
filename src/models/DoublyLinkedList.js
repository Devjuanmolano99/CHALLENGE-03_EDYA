// Nodo de la lista doblemente enlazada 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Lista doblemente enlazada 
// Historial del navegador: permite ir "atrás" y "adelante"

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null; // página actualmente visitada
  }

  // Agrega un nuevo nodo al final 
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      this.current = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  // Elimina un nodo por valor 
  remove(value) {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
        }

        if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail) this.tail.next = null;
        }

        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;

        this.length--;
        return current;
      }
      current = current.next;
    }

    return null;
  }

  size() {
    return this.length;
  }

  // ---- (historial del navegador) ----

  // Navega hacia atrás (página anteriormente visitada)
  goBack() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
    return this.current;
  }

  // Navega hacia adelante (página visitada después)
  goForward() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current;
  }

  canGoBack() {
    return !!(this.current && this.current.prev);
  }

  canGoForward() {
    return !!(this.current && this.current.next);
  }

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

export default DoublyLinkedList;
