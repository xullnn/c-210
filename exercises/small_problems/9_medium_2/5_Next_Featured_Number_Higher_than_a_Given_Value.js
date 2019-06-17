// odd
// multiple of 7
// each digit is unique

// how to determine if a number is "featured"
  // return false if
    // not odd
    // number of digits > 10
    // not divisible by 7


function isFeatured(number) {
  let numStr = String(number);
  if (number % 2 === 0 || number % 7 !== 0 || !digitsAreUnique(number)) return false;
  return true;
}

function nextOdd7multiple(number) {
  while (number % 2 === 0 || number % 7 !== 0) number += 1;
  return number
}

function digitsAreUnique(number) {
  let numStr = String(number);

  for(let i = 0; i < numStr.length; i += 1) {
    if (numStr.indexOf(numStr[i]) !== numStr.lastIndexOf(numStr[i])) return false;
  }

  return true;
}

function featured(number) {
  number = nextOdd7multiple(number);
  let incrementInterval = 9876543210 - number;

  for(let i = number; i < incrementInterval; i += 7) {
    if (isFeatured(i)) return i;
  }

  throw "No featured number any more."
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
