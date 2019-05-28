isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// case insensitive
// ignore non-alphebatic chars

// transform str
  // downcase
  // eliminate non-alphabetical ones
// utilize the previously written function

function isPalindrome(str) {
  let index;
  let rIndex;
  let charsAmount = str.length;

  for(index = 0; index < Math.floor(charsAmount / 2); index += 1) {
    rIndex = charsAmount - 1 - index;
    if (str[index] !== str[rIndex]) return false;
  }

  return true;
}

function isRealPalindrome(str) {
  var alphabets = str.match(/[a-z]/ig);
  var transformedStr = alphabets ? alphabets.join('').toLowerCase() : '';
  return isPalindrome(transformedStr);
}
