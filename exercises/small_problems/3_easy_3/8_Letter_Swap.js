// words word chars
// split words by space
// transform every wrod
//   split every word to an array of chars
//   get the first char, assign it to a variable firstChar
//   then substitude the first char with last char
//   then substitude the last char with the firstChar
//   join chars back together


function swap(str) {
  var words = str.split(' ');
  var firstChar;
  var chars;
  return words.map(function(word) {
    chars = word.split('');
    firstChar = chars[0];
    chars[0] = chars[chars.length - 1];
    chars[chars.length - 1] = firstChar;
    return chars.join('');
  }).join(' ')
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
