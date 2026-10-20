import { BinarySearchTree } from "./BinarySearchTree.js";
import { DEFAULT_NUMBERS } from "../data/treeData.js";

const bst = new BinarySearchTree();

// Poblar el árbol con los datos simulados
DEFAULT_NUMBERS.forEach((val) => bst.insert(val));

// Salidas en consola
console.log("Números insertados:", DEFAULT_NUMBERS);
console.log("PreOrder:  ", bst.preOrder());
console.log("InOrder:   ", bst.inOrder());
console.log("PostOrder: ", bst.postOrder());
