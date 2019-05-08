// 'a': 97
// 'z': 122
//
// 'A': 65;
// 'Z': 90;

// initialize a newStr as container
// iterate through chars
  // if current isAl
function isAlphebatic(char) {
  var ord = char.charCodeAt();
  return (ord >= 65 && ord <= 90) || (ord >= 97 && ord <= 122);
}

function cleanUp(string) {
  var newStr = '';
  var char;
  for(var i = 0; i < string.length; i += 1) {
    char = string[i];
    if (isAlphebatic(char)) {
      newStr += char;
    } else if (newStr[newStr.length - 1] !== ' ') {
      newStr += ' ';
    }
  }

  return newStr;
}

cleanUp("---what's my +*& line?");    // " what s my line "
