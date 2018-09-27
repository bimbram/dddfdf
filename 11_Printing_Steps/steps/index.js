// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function steps(n) {
  //var chars = ''
  for(var i = 0; i < n; i ++) {
    //chars += '#';
    //console.log(chars + spaces(n - i - 1));
    console.log('#'.repeat(i+1) + " ".repeat(n-i-1));
  }
}

function spaces(n) {
  var stringSpaces = ''
  for(var i = 0; i < n; i++) {
    stringSpaces += ' ';
  }
  return stringSpaces;
}




module.exports = steps;
