// input: string(may include non-alphebetic chars)
// output: ciphered string with the same case to the original one
//
// - map through orignal chars
//   - for alphebetic char, return the ciphered version
//   - otherwise keep the char unchanged
// - join chars together
//
// - how to handle case?
// - how to "rotate" the dictionary?
//
// // -- for alphebetic char, return the ciphered version --
// build a dictionary by an array of chars, indexes will naturally serve as the ord number of each char
//  [a b c d e f ... x  y  z]
//   0 1 2 3 4 5    23  24 25
//
//   ciphered index
//     afterIndex = (current index + offset)
//     if afterIndex > 25 find the remainder
//     else keep it unchanged
//
//   if current char is upperCase
//     shift the char, then upcase it
//   if its not just shift the char
//
//   24 + 5 = 29 (> 25)
//   29 % 26 = 3
//
//   0 + 47 = 47
//   47 % 26 = 21

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function shiftedIndex(currentIndex, offset) {
  let afterIndex = currentIndex + offset;
  if (afterIndex > 25) {
    return afterIndex % 26;
  } else {
    return afterIndex
  }
}

function caesarEncrypt(msg, offset) {
  const charTable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let index;

  return msg.split('').map((char) => {
    index = charTable.indexOf(char.toLowerCase());
    if (/[^a-z]/i.test(char)) return char;
    cipheredChar = charTable[shiftedIndex(index, offset)];
    return isUpperCase(char) ? cipheredChar.toUpperCase() : cipheredChar;
  }).join('')
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v" 20

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
