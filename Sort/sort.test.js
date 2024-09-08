const sort = require('./sort');

test('Ordena un array de numeros de menor a mayor', () => {
    expect(sort([3,1,4,1,5,9])).toEqual([1,1,3,4,5,9]);
    expect(sort([10,2,8,6,7,5])).toEqual([2,5,6,7,8,10]);
    expect(sort([0,-1,-5,3,2])).toEqual([-5,-1,0,2,3]);
});

test('Devuelve un array vacio si la entrada es un array vacio',() => {
    expect(sort([])).toEqual([]);
});

test('Array con un solo elemento', () => {
    expect(sort([1])).toEqual([1]);
    expect(sort([0])).toEqual([0]);
    expect(sort([-1])).toEqual([-1]);
});

test('Devuelve false para entradas no validas', () => {
    expect(sort(null)).toBe(false)
    expect(sort(undefined)).toBe(false)
    expect(sort('string')).toBe(false)
    expect(sort(123)).toBe(false)
});