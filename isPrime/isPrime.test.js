const isPrime = require('./isPrime');

test('Devuelve true si el valor es primo', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(11)).toBe(true);
});

test('Devuelve false si el valor no es primo', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(10)).toBe(false);
});

test('Devuelve false para entradas no válidas', () => {
  expect(isPrime(-1)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(2.5)).toBe(false);
  expect(isPrime('7')).toBe(false);
  expect(isPrime(null)).toBe(false);
  expect(isPrime(undefined)).toBe(false);
  expect(isPrime({})).toBe(false);
});



//Ejemplo de Ejecución
//Supongamos que llamamos a la función con el número 11:

/*
Validación de Entrada:
typeof 11 !== 'number' es false (11 es un número).
11 <= 1 es false (11 es mayor que 1).
!Number.isInteger(11) es false (11 es un entero).

Bucle para Verificar Divisibilidad:
La raíz cuadrada de 11 es aproximadamente 3.32, por lo que el bucle se ejecutará con i igual a 2 y 3.
11 % 2 !== 0 (11 no es divisible por 2).
11 % 3 !== 0 (11 no es divisible por 3).

Retorno:
Como no se encontraron divisores, la función devuelve true, indicando que 11 es un número primo.
*/