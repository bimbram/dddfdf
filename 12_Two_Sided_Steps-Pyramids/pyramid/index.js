// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//  pyramid(5)
//  '    #    '
//  '   ###   '
//  '  #####  '
//  ' ####### '
//  '#########'


// My solution (iterative)
function pyramid(n) {
  var level='', pounds='', left='', right='';
  var collumnLength = ( (n * 2) - 1 );
  for(let row = 0; row < n; row++) {
    level = left = right = pounds = '';
    for(let collumn = 0; collumn < collumnLength; collumn++) {
      if(row + collumn < Math.floor(collumnLength/2) ) {
        left += ' ';
      }
      else if(collumn > (collumnLength - left.length) - 1) {
        right += ' ';
      }
      else {
        pounds += '#';
      }
    }
    level = left + pounds + right;
    console.log(level);
  }
}

// My solution (recursive)
function pyramid(n, iteration = 0) {
  if(n === 0) {
    return;
  }

  var spaces = ' '.repeat(n-1);
  var bricks = iteration === 0 ? '#' : '#' +'##'.repeat(iteration);
  var pyramidLevel = spaces + bricks + spaces;

  console.log(pyramidLevel);

  return pyramid(n-1, iteration + 1);
}




module.exports = pyramid;
