// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution
function reverseInt(n) {
  if(n < 0 ) {
    n = Math.abs(n);
    var reverseInt = String(n).split('').reverse().join('');
    return Number("-" + reverseInt);
  } else {
    var reverseInt = String(n).split('').reverse().join('');
    return Number(reverseInt);
  }
}



module.exports = reverseInt;
