// Clase que representa un nodo en un árbol N-ario
// Cada nodo almacena title, link, component y un arreglo de hijos (children)

class TreeNode {
  constructor(title, link = "#", component = null) {
    this.title = title;
    this.link = link;
    this.component = component;
    this.children = [];
  }

  // Agrega un nodo hijo a este nodo
  addChild(node) {
    this.children.push(node);
    return node;
  }

  // Comprueba si el nodo es una hoja (no tiene submenús)
  isLeaf() {
    return this.children.length === 0;
  }
}

export default TreeNode;
