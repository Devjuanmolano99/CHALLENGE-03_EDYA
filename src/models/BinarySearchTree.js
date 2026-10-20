/**
 * Representa un nodo individual en un árbol binario de búsqueda (BST).
 * Implementa recursión delegada a nivel de nodo para separar responsabilidades.
 */
export class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  /**
   * Inserta un nuevo valor en el subárbol respectivo según la propiedad del BST:
   * Menores a la izquierda, mayores a la derecha.
   */
  insert(newKey) {
    if (newKey < this.key) {
      if (!this.left) {
        this.left = new BSTNode(newKey);
      } else {
        this.left.insert(newKey);
      }
    } else if (newKey > this.key) {
      if (!this.right) {
        this.right = new BSTNode(newKey);
      } else {
        this.right.insert(newKey);
      }
    }
    // Si es igual, se ignora para evitar duplicados en el BST
  }

  /**
   * Recorrido Pre-Orden (Raíz -> Izquierda -> Derecha)
   */
  collectPreOrder(accumulator) {
    accumulator.push(this.key);
    this.left?.collectPreOrder(accumulator);
    this.right?.collectPreOrder(accumulator);
  }

  /**
   * Recorrido In-Orden (Izquierda -> Raíz -> Derecha)
   * Devuelve los valores en orden ascendente natural.
   */
  collectInOrder(accumulator) {
    this.left?.collectInOrder(accumulator);
    accumulator.push(this.key);
    this.right?.collectInOrder(accumulator);
  }

  /**
   * Recorrido Post-Orden (Izquierda -> Derecha -> Raíz)
   */
  collectPostOrder(accumulator) {
    this.left?.collectPostOrder(accumulator);
    this.right?.collectPostOrder(accumulator);
    accumulator.push(this.key);
  }
}

/**
 * Clase controladora del Árbol Binario de Búsqueda (Binary Search Tree).
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserta un nuevo valor en el árbol.
   */
  insert(key) {
    const numericKey = Number(key);
    if (isNaN(numericKey)) return;

    if (!this.root) {
      this.root = new BSTNode(numericKey);
    } else {
      this.root.insert(numericKey);
    }
  }

  /**
   * Obtiene la secuencia del recorrido Pre-Orden
   * @returns {number[]}
   */
  preOrder() {
    const sequence = [];
    this.root?.collectPreOrder(sequence);
    return sequence;
  }

  /**
   * Obtiene la secuencia del recorrido In-Orden
   * @returns {number[]}
   */
  inOrder() {
    const sequence = [];
    this.root?.collectInOrder(sequence);
    return sequence;
  }

  /**
   * Obtiene la secuencia del recorrido Post-Orden
   * @returns {number[]}
   */
  postOrder() {
    const sequence = [];
    this.root?.collectPostOrder(sequence);
    return sequence;
  }

  /**
   * Busca si existe un valor en el árbol
   */
  has(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) return true;
      current = key < current.key ? current.left : current.right;
    }
    return false;
  }

  /**
   * Limpia el árbol
   */
  clear() {
    this.root = null;
  }
}

export default BinarySearchTree;
