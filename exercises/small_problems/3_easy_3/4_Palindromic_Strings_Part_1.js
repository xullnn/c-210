isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// compare from both ends towards center
  // index 0
  // rIndex = length - 1 - index
  // the range of index: < Math.floor(length / 2)

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
