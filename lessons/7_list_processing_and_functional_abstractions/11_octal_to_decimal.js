function octalToDecimal(numberString) {
  let digits = numberString.split('').reverse();
  return digits.reduce((acc, strDigit, index) => {
    return acc + Math.pow(8, index) * Number(strDigit);
  }, 0)
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

// - split str into chars
// - revser chars
// - iterate(reduce) through chars with index, give initial value as 0
//   - acc + Number(char) to the power of index
