

function isEven(number) {
    if (typeof number !== "number" || number < 0 || !Number.isInteger(number)) {
        return false
    }
    return number % 2 === 0;
}

module.exports = isEven;