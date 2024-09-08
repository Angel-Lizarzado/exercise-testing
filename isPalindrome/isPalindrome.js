function isPalindrome(str) {
    if(typeof str !== 'string' || str.length === 0) {
        return false
    }
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

module.exports = isPalindrome;

/*
typeof str !== 'string': Verifica que la entrada sea una cadena de texto.

str.length === 0: Verifica que la cadena no esté vacía. Si la entrada no cumple con estos criterios, 
la función devuelve false.

str.replace(/[^A-Za-z0-9]/g, ''): Elimina todos los caracteres que no sean letras o números. 
Esto incluye espacios, puntuación y otros caracteres especiales.

.toLowerCase(): Convierte la cadena a minúsculas para que la comparación no sea sensible a 
mayúsculas y minúsculas.

cleanedStr.split('').reverse().join(''): Divide la cadena en un array de caracteres, 
invierte el array y luego une los caracteres de nuevo en una cadena.

return cleanedStr === reversedStr: Compara la cadena original limpia con la cadena invertida. 
Si son iguales, la cadena es un palíndromo y la función devuelve true; de lo contrario, devuelve false.
*/