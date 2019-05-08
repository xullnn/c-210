// set a initial variable as pointer pointer = ''
// set a container empty string
// iterate through all chars one by one
  // compare pointer against the current char
    // if pointer is not equal to current char
      // push char
      // update pointer

function crunch(string) {
  var lastChar = '';
  var newStr = '';

  for(var i = 0; i < string.length; i += 1) {
    if (string[i] !== lastChar) {
      newStr += string[i];
      lastChar = string[i];
    }
  }

  return newStr;
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

'ddaaiillyy ddoouubbllee'.replace(/(.)./g, '$1')
'4444abcabccba'.replace(/(.)./g, '$1')
