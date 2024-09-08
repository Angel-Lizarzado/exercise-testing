function sort(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    return arr.slice().sort((a,b) => a - b);
}

module.exports = sort;


/*
arr.slice().sort((a, b) => a - b): Utilizamos slice() para crear una copia del array original y sort() 
para ordenar los elementos. La función de comparación (a, b) => a - b asegura que los números 
se ordenen de menor a mayor.
*/ 