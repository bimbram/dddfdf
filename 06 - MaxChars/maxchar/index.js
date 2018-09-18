// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// My solution
/*
function maxChar(str) {
  var nonduplicate = str
    .split('')
    .filter(function(el, index, arr){
      return index === arr.indexOf(el);
    });
  var charCount = [];
  for(let nonduplicateChar of nonduplicate) {
    var matchChar = 0
    for(let char of str) {
      if(nonduplicateChar === char) {
        matchChar++;
      }
    }
    charCount.push(matchChar);
  }
  var maxCount = Math.max(...charCount);
  var indexMaxCount = charCount.indexOf(maxCount);
  return nonduplicate[indexMaxCount];
}
*/

// My solution after watching the first video
function maxChar(str) {
  var charObj = {}
  for(let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  var charCountArr = Object.keys(charObj).map(key => charObj[key]);
  var maxIndex = charCountArr.indexOf( Math.max(...charCountArr) );
  return Object.keys( charObj )[ maxIndex ];
}



module.exports = maxChar;
