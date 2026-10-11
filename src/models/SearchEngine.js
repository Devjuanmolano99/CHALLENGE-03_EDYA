import Trie from "./Trie";
import MaxHeap from "./MaxHeap";

// Clase que integra Trie + MaxHeap para resolver el Challenge 11
export class SmartSearchEngine {
  constructor() {
    this.trie = new Trie();
  }

  // insert: guarda un producto en el Trie con su nombre y popularidad
  insert(name, popularity) {
    this.trie.insert(name, popularity);
  }

  // searchTopK: busca productos por prefijo en el Trie y usa MaxHeap para retornar el Top K
  searchTopK(prefix, k = 5) {
    // 1. Buscamos en el Trie todos los productos que inicien con el prefijo
    const matchingProducts = this.trie.searchByPrefix(prefix);

    if (!matchingProducts || matchingProducts.length === 0) {
      return [];
    }

    // 2. Usamos el MaxHeap para ordenar los productos por mayor popularidad
    const heap = new MaxHeap();
    heap.heapify(matchingProducts);

    // 3. Extraemos los K productos con mayor popularidad mediante heap.pop()
    const topResults = [];
    const limit = Math.min(Number(k) || 1, matchingProducts.length);

    for (let i = 0; i < limit; i++) {
      const topProduct = heap.pop();
      if (topProduct) {
        topResults.push(topProduct);
      }
    }

    return topResults;
  }

  // Obtiene todos los productos registrados en el Trie
  getAllProducts() {
    return this.trie.getAllProducts();
  }
}

export default SmartSearchEngine;
