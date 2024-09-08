const isPalindrome = require('./isPalindrome')

test('devuelve true para palindromos', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);

});

test('Devuelve false para entradas no validas', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('palindrome')).toBe(false);

});

test('Devuelve false para entradas no validas', () => {
    expect(isPalindrome('')).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
    expect(isPalindrome(12321)).toBe(false);
});