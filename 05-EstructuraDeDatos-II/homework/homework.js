'use strict';

const { concurrency } = require("@11ty/eleventy-cache-assets");
const { _normalizeShortcodeScope } = require("@11ty/eleventy/src/Engines/Liquid");
const bus = require("@11ty/eleventy/src/EventBus");
const TemplatePassthroughManager = require("@11ty/eleventy/src/TemplatePassthroughManager");
const { has } = require("markdown-it/lib/common/utils");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

LinkedList.prototype.add = function(datos) {
  var nodo = new Node(datos);
  var nodoActual = this.head;
  if (!this.head) {
    this.head = nodo;
  } else {
    while (nodoActual.next){
      nodoActual = nodoActual.next;
    }
    nodoActual.next = nodo;
  }
  this._length += 1;
  return nodo;
}

LinkedList.prototype.remove = function() {
  var valorNodoRemovido = null;
  if (this._length === 0) {
    return null;
  } else if (this._length === 1) {
    valorNodoRemovido = this.head.value;
    this.head = null;
    this._length = 0;
  } else if (this._length === 2) {
    valorNodoRemovido = this.head.next.value;
    this.head.next = null;
    this._length = 1;
  } else {
    var nodoActual = this.head;
    while (nodoActual.next.next) {
      nodoActual = nodoActual.next;
    }
    valorNodoRemovido = nodoActual.next.value;
    nodoActual.next = null;
    this._length -= 1;
  }
  return valorNodoRemovido;
}

LinkedList.prototype.search = function(parametro) {
  if (this._length > 0) {
    var currentNode = this.head;
    while (currentNode) {
      if (typeof(parametro) === "function"){
        if (parametro(currentNode.value)) return currentNode.value;
      }
      else {
        if (parametro === currentNode.value) return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }
  return null;
}

LinkedList.prototype.getAll = function(){
  var current = this.head //empezamos en la cabeza
  if(!current){
      console.log('La lista esta vacia!')
      return
  }
  while(current){
      console.log(current.value);
      current = current.next;
  }
  return
};

function Node(value) {
  this.value = value;
  this.next = null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
  for (let i = 0; i < this.numBuckets; i++){
    this.buckets.push({});
  }
}

HashTable.prototype.hash = function(inputAlfabetico) {
  var sumaDeCaracteres = 0;
  for (let posicion = 0; posicion < inputAlfabetico.length; posicion++) {
    console.log("Soy el caracter ",inputAlfabetico[posicion], " y mi CharCodeAt es: [", inputAlfabetico.charCodeAt(posicion), "]")
    sumaDeCaracteres += inputAlfabetico.charCodeAt(posicion);
  }
  sumaDeCaracteres = sumaDeCaracteres % this.numBuckets;
  return sumaDeCaracteres;
}

HashTable.prototype.set = function(clave, valor){
  if (typeof(clave) === "string") {
    if (!this.buckets[this.hash(clave)]) {
      this.buckets[this.hash(clave)] = {};
    }
    this.buckets[this.hash(clave)][clave] = valor;
  }
  else {
    throw TypeError("La clave no es un string")
  }
}

HashTable.prototype.get = function(clave){
  if (typeof(clave) === "string") {
    if (this.buckets[this.hash(clave)][clave])
      return this.buckets[this.hash(clave)][clave];
  }
  else {
    throw TypeError("La clave no es un string")
  }
}

HashTable.prototype.hasKey = function(clave){
  if (typeof(clave) === "string") {
    if (this.buckets[this.hash(clave)][clave]) return true;
    return false;
  }
  else {
    throw TypeError("La clave no es un string")
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
