'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
}

// Solucion 1 Fibonacci:
// function nFibonacci(n, numeroA = 0, numeroB = 1, contador = 0) {
//   console.log("[N = ", n, " Contador: ", contador," Numero A: ", numeroA, " Numero B: ", numeroB, " Fibonacci actual: ", numeroA + numeroB, " ]");

//   if (n < 2) {
//     console.log("Fibonacci de ", n, " es: ", n);
//     return n;
//   }

//   if (contador === n) {
//     console.log("Fibonacci de ", n, " es: ", numeroA + numeroB);
//     return (numeroA + numeroB);
//   }

//   contador += 1;
//   if (contador > 2) {
//     var numActual = numeroA + numeroB;
//     numeroA = numeroB;
//     numeroB = numActual;
//   }

//   return nFibonacci(n, numeroA, numeroB, contador);
// }

// Solucion 2 Fibonacci:
function nFibonacci(n, contador = 0, listaFibonacci = [0, 1]) {
  console.log("[ N = ", n, " Contador: ", contador," Lista: ", listaFibonacci, " Fibonacci actual: ", listaFibonacci[contador-1]+ listaFibonacci[contador-2], " ]");
  if (n < 2) {
    return n;
  }
  if (contador === n) {
    return listaFibonacci[n];
  }
  contador +=1;
  if (contador > 1 ) {
    listaFibonacci.push(Number(listaFibonacci[contador-1] + listaFibonacci[contador-2]));
  }
  console.log("[N = ", n, " Contador: ", contador," Lista: ", listaFibonacci, " Fibonacci actual: ", listaFibonacci[contador-1]+ listaFibonacci[contador-2], " ]");
  return nFibonacci(n, contador, listaFibonacci);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.cola = [];
  }
  enqueue(newElement) { return this.cola.unshift(newElement); };
  dequeue() { return this.cola.pop(); };
  size() { return this.cola.length;}

}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
