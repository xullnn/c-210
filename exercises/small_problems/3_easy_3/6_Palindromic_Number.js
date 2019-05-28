function isPalindromicNumber(number) {
  let index;
  let rIndex;
  let str = String(number);
  let charsAmount = str.length;

  for(index = 0; index < Math.floor(charsAmount / 2); index += 1) {
    rIndex = charsAmount - 1 - index;
    if (str[index] !== str[rIndex]) return false;
  }

  return true;
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
