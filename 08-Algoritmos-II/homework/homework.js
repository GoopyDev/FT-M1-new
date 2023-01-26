'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) { return array; }

  //                Math.floor(Math.random() * (max - min + 1)) + min);
  var pivot = array[Math.floor(Math.random() * (array.length))]; // Array[x]
  var leftArray =  [];
  var rightArray = [];
  var ignorarPivot = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot)  leftArray.push(array[i]);
    if (array[i] > pivot) rightArray.push(array[i]);
    if (array[i] === pivot) {  // Manejar repetidos
      if (ignorarPivot) {
        ignorarPivot = false;
      } else {
        leftArray.push(array[i]);
      }
    }
  }
  return quickSort(leftArray).concat(pivot).concat(quickSort(rightArray));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
