// input: plain text
// output: ciphered text
//
// m  e a t
//   12 4 0 19
//   key is case insensitive
//   numbers in key should be used repeatedly
//
// "Pineapples don't go on pizzas!"
//   case of each letter should be kept
//   non-alphabetic chars should not consume a single key

// Map through chars in the plain text
//   for each char
//     if current char is not in apphabet, return itself
//
//     use a variable to record if the current char is uppercase?
//     find out its current index(after downcase)
//     yield(shift) one number from the key
//     calculate the new index based on the current index and the key number
//     return new char based on new index and variable is uppercase?
// join chars back
//
// [12 4 0 19 12 4 0 19 12 4 0 19 ...]
// 23
// 23 / length of key then ceil it up to the nearest integer

const table = "abcdefghijklmnopqrstuvwxyz"

function keyNums(text, key) {
  let charAmount = (text.match(/[a-z]/ig) || []).length;
  let numOfKeys = Math.ceil(charAmount / key.length);
  let keyArray = key.split('').map(char => table.indexOf(char.toLowerCase()));
  let keys = [];

  for(let t = 1; t <= numOfKeys; t += 1) {
    keys = keys.concat(keyArray);
  }

  return keys;
}

function encrypt(text, key) {
  let keys = keyNums(text, key);
  let char;
  let isUpperCase;

  return text.split('').map(char => {
    if (/[^a-z]/i.test(char)) return char;

    isUpperCase = (char.toUpperCase() === char);
    ciphered = cipheredChar(char, keys.shift())
    return isUpperCase ? ciphered.toUpperCase() : ciphered;
  }).join('')
}

function cipheredChar(char, keyNum) {
  let currentIndex = table.indexOf(char.toLowerCase());
  let sumIndex = currentIndex + keyNum;
  let newIndex = sumIndex > 25 ? sumIndex % 26 : sumIndex;
  return table[newIndex]
}

var text = "Pineapples don't go on pizzas!";
var key = 'Meat'
// console.log(keyNums(text, key).length)

console.log(encrypt(text, key)); // "Bmnxmtpeqw dhz'x gh ar pbldal!"
