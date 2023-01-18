# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```
<!--              a, b, c
ejecuta funcion C(8, 9, 10)
	declara X y le asigna = 10
	imprime X que es 10
	imprime a que es 8			  a, b, c
	crea funcion F que toma los 3 argumentos (8, 9, 10)
	ejecuta funcion F(8, 9, 10)
		b se transforma en a, que es 8
		imprime b, que es 8
		b se transforma en c, que es 10
		declara X y le asigna = 5
	imprime b, que es 9
imprime b, que es 10
imprime x, que es 1

En limpio:
imprime 10
imprime 8
imprime 8
imprime 9
imprime 10
imprime 1 -->

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```
<!-- undefined
baz is not declared
imprime Hola! ** Esto no se llegó a ejecutar ** -->


```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```
<!-- imprime "Franco" -->

```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
```
<!-- imprime "Tony"
Uncaught error, ( not expected. ** Esto no sucedió, creí que el parentesis iba a ser tomado como error de sintaxis **

Solucion:
imprime "Tony"
imprime "Franco"
imprime "Tony" -->


```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
```
<!-- imprime "The Flash"
imprime "Reverse Flash"
imprime "The Flash"
imprime "Reverse Flash" ** La LET no se volvió a declarar ni se pisó, siguió siendo "Franco" ** -->

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"           // 2
"2" * "3"         // 6
4 + 5 + "px"      // 45px
"$" + 4 + 5       // $45
"4" - 2           // 2
"4px" - 2         // Error?
7 / 0             // Can't divide by 0
{}[0]             // Undefined
parseInt("09")    // 9
5 && 2            // No se... false?
2 && 5            // No se... false?
5 || 0            // No se... false?
0 || 5            // No se... false?
[3]+[3]-[10]      // No se
3>2>1             // False, porque primero resuelve la comparación de la derecha 2>1 y se vuelve True, entonces hace 3>True
[] == ![]         // Undefined
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
   

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```
