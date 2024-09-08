const fibonacci = require('./fibonacci')

test('devuelve el numero de Fibonacci correspondiente', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
});

test('devuelve false para entradas no validas', () => {
    expect(fibonacci(-1)).toBe(false)
    expect(fibonacci(2.5)).toBe(false)
    expect(fibonacci('5')).toBe(false)
    expect(fibonacci(null)).toBe(false)
    expect(fibonacci(undefined)).toBe(false)
    expect(fibonacci({})).toBe(false)
});

/*
¿Qué es la serie de Fibonacci?
La serie de Fibonacci es una secuencia de números en la que cada número es la suma de los dos anteriores. 
La secuencia comienza con 0 y 1, y continúa de la siguiente manera:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34


Supongamos que llamamos a la función con el número 5:

typeof 5 !== 'number' es false (5 es un número).
5 < 0 es false (5 no es negativo).
!Number.isInteger(5) es false (5 es un entero).

Inicialización: a = 0, b = 1.
Iteración 1 (i = 2): temp = 0 + 1 = 1, a = 1, b = 1.
Iteración 2 (i = 3): temp = 1 + 1 = 2, a = 1, b = 2.
Iteración 3 (i = 4): temp = 1 + 2 = 3, a = 2, b = 3.
Iteración 4 (i = 5): temp = 2 + 3 = 5, a = 3, b = 5.
Al final del bucle, b es 5, que es el quinto número de la serie de Fibonacci.
*/ 