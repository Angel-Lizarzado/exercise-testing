function fibonacci(n) {
    if (typeof n !== 'number' || n < 0  || !Number.isInteger(n)){
        return false;
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a+b;
        a=b;
        b=temp;
    }
    return b;
}

module.exports = fibonacci


/* 
typeof n !== 'number': Verifica que la entrada sea un número.

n < 0: Verifica que el número no sea negativo, ya que la serie de Fibonacci 
solo se define para números enteros positivos.

!Number.isInteger(n): Verifica que el número sea un entero. Los números decimales no son válidos en este contexto.

Si n es 0, la función devuelve 0, ya que el primer número de la serie de Fibonacci es 0.
Si n es 1, la función devuelve 1, ya que el segundo número de la serie de Fibonacci es 1.

a se inicializa a 0 y b a 1, que son los dos primeros números de la serie.

El bucle comienza en 2 y continúa hasta n. En cada iteración, 
se calcula el siguiente número de Fibonacci sumando a y b.

a se actualiza al valor de b y b se actualiza al valor de temp (que es la suma de a y b).

Al final del bucle, b contiene el número de Fibonacci correspondiente a n.
*/