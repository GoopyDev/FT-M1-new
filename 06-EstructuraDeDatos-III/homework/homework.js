'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree() {
   this._size = 0;
   this.left = null;
   this.right = null;
}

// size: retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function(arbolActual = null, arboles = 1) {
   arbolActual = this;
   if (!arbolActual) return 0;
   if (arbolActual.left) {
      arboles++;
      this.size(arbolActual.left, arboles);
   }
   if (arbolActual.right) {
      arboles++;
      this.size(arbolActual.right, arboles);
   }
   return arboles;
}

// insert: agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function(value, nodoActual = this.root) {
   var nodo = new Node(value);
   var nivel = new Node(value);
   if (!nodoActual) this.root = nodoActual;
   else {
      if (nodoActual.left && nodoActual.right) {

      }
   }
   return nodoActual;
}

// contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function() {}

// depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún
// parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.depthFirstForEach = function() {}

// breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
