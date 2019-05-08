// string.charCodeAt()
// String.fromCharCode(n)

// 'a'.charCodeAt() // 97
// 'A'.charCodeAt() // 65

// initialize an empth string as container newStr
// iterate through string
  // if current char is nonalphebetical
    // directly concatenate it
  // else
    // if lowercase
      // find char code old_ascii
      // moved = old_ascii + 13
      // new_ascii = 97 + (moved % (97 + 26))
      // converit back to new char then concatenate it
    // if uppercase
      // similar process, use 65 to sub 97

const LOWER_START = 97;
const UPPER_START = 65;
const LOWER_END = LOWER_START + 26;
const UPPER_END = UPPER_START + 26;

function newAsciiOf(char) {
  var newAscii = char.charCodeAt() + 13;

  if (/[a-z]/.test(char) && newAscii >= LOWER_END) {
    newAscii = (LOWER_START + (newAscii % LOWER_END));
  } else if (/[A-Z]/.test(char) && newAscii >= UPPER_END) {
    newAscii = (UPPER_START + (newAscii % UPPER_END));
  }

  return newAscii;
}

function rot13(string) {
  var newStr = '';
  var char;

  for(var i = 0; i < string.length; i += 1) {
    char = string[i];
    if (/[^a-zA-Z]/.test(char)) {
      newStr += char;
    } else {
      newStr += String.fromCharCode(newAsciiOf(char));
    }
  }

  return newStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
