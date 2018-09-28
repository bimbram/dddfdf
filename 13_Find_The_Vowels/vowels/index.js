// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My solution (regex)
function vowels(str) {
  const matched = str.match(/[aiueo]/gi);
  return matched === null ? 0 : matched.length;
}

// My solution (iterative)
function vowels(str) {
  const dictionary = ['a', 'i','u','e','o'];
  return str
    .toLowerCase()
    .split('')
    .filter(function(el) {
      return dictionary.indexOf(el) !== -1;
    }).length;
}

// Solution 1 (iterative)
function vowels(str) {
  let count = 0;
  const checker = ['a','i','u','e','o'];
  for(let char of str.toLowerCase()) {
    if(checker.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
