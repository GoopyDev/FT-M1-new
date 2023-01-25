'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //
  // Me dan un numero del cual debo obtener los factores
  // Los factores son números primos, no se podrá dividir por otro tipo de numero
  // Se debe ir dividiendo por el divisor primo mas chico posible, hasta llegar al último
  let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  var factoreo = [1];
  while (num > 1) {
    for (let i = 0; i < primos.length; i++) {
      if (num % primos[i] === 0) {
        num = num / primos[i];
        factoreo.push(primos[i]);
        break;
      }
    }
  }
  return factoreo;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Analizo el primer numero, lo comparo con el segundo. Si es mayor, lo coloco a la derecha y el menor a la izquierda.
  // Debería activar un indicador que diga que el array está desordenado (si no hubiera nada que cambiar, ese indicador servirá para
  // detener el bucle)
  let desordenado = true;
  var nroReemplazo;
  while(desordenado) {
    desordenado = false;
    for (let i = 0; i < array.length -1; i++) {
      if (array[i] > array[i+1]) {
        nroReemplazo = array[i];
        array[i] = array[i+1];
        array[i+1] = nroReemplazo;
        desordenado = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // Recorre los elementos, y en cada uno, revisa si lo puede insertar en las posiciones más bajas.
  var desordenado = true;
  var nroAReemplazar; // El valor de Array[J] a ser reemplazado por Array[i]
  var nroInsercion; // La posición donde debe insertarse el nro
  while(desordenado) {
    desordenado = false;
    for (let i = 1; i < array.length; i++) {//Recorrer todos los n del array
      nroAReemplazar = null;
      for (let j = i-1; j > -1; j-=1) {     //Recorrer todos los n anteriores a i
        if (array[i] < array[j]) {          //Si el numero actual (i) es menor a un numero anterior (j)...
          desordenado = true;               //Debo hacer cambios, de modo que indico que el array está desordenado
          if (nroAReemplazar === null) {    //Si nroAReemplazar es null (o sea, no guardé ningun nro menor a i aun)
            nroAReemplazar = array[j];      //nroAReemplazar pasa a ser el nro anterior a i que encontré que es mayor a i
            nroInsercion = j;               //guardo la posición en la que se encontraba el nro mayor a i
          } else {
            if (array[j] < nroAReemplazar) {
              nroAReemplazar = array[j];
              nroInsercion = j;
            }
          }
        }
      }
      if (nroAReemplazar) {
        array[nroInsercion] = array[i];
        array[i] = nroAReemplazar;
      }
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // Tomar el primer numero del array
  // Recorrer el array buscando el menor nro de todos
  // Intercambiar posiciones de ambos.
  // Avanzar con el segundo nro del array y realizar lo mismo
  // Se entiende que al ir avanzando, las posiciones ya visitadas están ordenadas
  var nroMenor;
  var posicion;
  var intercambiar = false;
  for (let i = 0; i < array.length -1; i++) {
    nroMenor = null;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        intercambiar = true;
        if (!nroMenor) {
          nroMenor = array[j]; // Guardo el valor del nro menor encontrado
          posicion = j;        // Guardo la posicion del nro menor encontrado para luego hacer swap
        }
        else {
          if (array[j] < nroMenor) {
            nroMenor = array[j]; // Guardo el valor del nro menor encontrado
            posicion = j;        // Guardo la posicion del nro menor encontrado para luego hacer swap
          }
        }
      }
    }
    // Intercambio
    if (intercambiar) {
      array[posicion] = array[i];
      array[i] = nroMenor;
      intercambiar = false;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
