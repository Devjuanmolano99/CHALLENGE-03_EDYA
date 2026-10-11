// Implementación de Trie según las diapositivas 6-9 de la clase 11

// Nodo individual del Trie
export class TrieNode {
  constructor(char = null) {
    this.char = char;
    this.children = {}; // Mapa de caracteres hijos
    this.isEndOfWord = false; // Indica si es el final de una palabra
    this.productData = null; // Guarda { name, popularity } cuando es palabra completa
  }
}

// Estructura de datos Trie
export class Trie {
  constructor() {
    this.root = new TrieNode(null); // Raíz con valor nulo
  }

  // insert: divide la palabra en letras y las encadena en el árbol
  insert(name, popularity = 0) {
    if (!name) return;

    const normalized = name.toLowerCase().trim();
    let current = this.root;

    for (let i = 0; i < normalized.length; i++) {
      const char = normalized[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }
      current = current.children[char];
    }

    current.isEndOfWord = true;
    current.productData = {
      name: normalized,
      popularity: Number(popularity),
    };
  }

  // search: busca una palabra exacta en el Trie
  search(word) {
    if (!word) return false;

    const normalized = word.toLowerCase().trim();
    let current = this.root;

    for (let i = 0; i < normalized.length; i++) {
      const char = normalized[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    return current.isEndOfWord ? current.productData : false;
  }

  // searchByPrefix: encuentra todos los productos que comiencen con el prefijo dado
  searchByPrefix(prefix) {
    if (!prefix || !prefix.trim()) {
      return this.getAllProducts();
    }

    const normalized = prefix.toLowerCase().trim();
    let current = this.root;

    // 1. Navegamos hasta el nodo final del prefijo
    for (let i = 0; i < normalized.length; i++) {
      const char = normalized[i];
      if (!current.children[char]) {
        return []; // Prefijo no encontrado en el árbol
      }
      current = current.children[char];
    }

    // 2. Recorremos en profundidad (DFS) todos los hijos de ese nodo para recolectar las palabras
    const results = [];
    this._collectWords(current, results);
    return results;
  }

  // Función recursiva auxiliar para recolectar productos en los subárboles
  _collectWords(node, results) {
    if (node.isEndOfWord && node.productData) {
      results.push(node.productData);
    }

    for (const char in node.children) {
      this._collectWords(node.children[char], results);
    }
  }

  // Retorna todos los productos almacenados en el Trie
  getAllProducts() {
    const results = [];
    this._collectWords(this.root, results);
    return results;
  }
}

export default Trie;
