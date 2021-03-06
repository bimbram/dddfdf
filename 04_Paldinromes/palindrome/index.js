// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
// My solution (first try)
function palindrome(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str ? true : false;
}

// First solution
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed ? true : false;
}
*/

// Alternate solution (using 'every' array helper)
function palindrome(str) {
  return str.split('').every((char, i, arr) => {
    return char === arr[arr.length - 1 - i];
  });
}

module.exports = palindrome;
