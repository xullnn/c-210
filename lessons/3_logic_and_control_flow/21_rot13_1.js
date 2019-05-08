// Solution based on given solution

// 'abcdefghijklmnopqrstuvwxyz'
// 'x' => 23
// 23 + 13 = 36
// 'k' => 11 (36 - 25)

// initialize an empty string as container
// iterate through the chars
  // if current char is in [a-z], convert it, concatenate it
  // if current char is in [A-Z], convert it, concatenate it
  // if(else) current char is non-alphabetic char, concatenate it directly

function encodeChar(char) {
  var charTable = 'abcdefghijklmnopqrstuvwxyz';
  var newChar;

  if (/[a-z]/.test(char)) {
    newChar = charTable[(charTable.indexOf(char) + 13) % 26];
  } else if (/[A-Z]/.test(char)) {
    newChar = charTable[(charTable.indexOf(char.toLowerCase()) + 13) % 26].toUpperCase();
  } else {
    newChar = char;
  }

  return newChar
}

function rot13(string) {
  var newStr = '';
  for(var i = 0; i < string.length; i += 1) {
    newStr += encodeChar(string[i]);
  }
  
  return newStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
