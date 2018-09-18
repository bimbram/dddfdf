// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// My solution
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

module.exports = maxChar;
