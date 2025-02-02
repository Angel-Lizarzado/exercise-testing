function isPrime(number) {
    if (typeof number !== 'number' || number <= 1 || !Number.isInteger(number)) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = isPrime;
  