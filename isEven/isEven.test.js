const isEven = require('./isEven');

test('Devuelve true para numeros pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(8)).toBe(true);
    expect(isEven(12)).toBe(true);
    expect(isEven(16)).toBe(true);
    expect(isEven(20)).toBe(true);
})

test('Devuelve false para numeros impares', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(15)).toBe(false);
    expect(isEven(21)).toBe(false);
    expect(isEven(25)).toBe(false);
})

test ('Devuelve false para entradas no validas', () => {
    expect(isEven('2')).toBe(false);
    expect(isEven(-2)).toBe(false);
    expect(isEven(2.5)).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven(({}))).toBe(false);
})