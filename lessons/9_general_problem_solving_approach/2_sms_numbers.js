// inputs
//   - should be String type
//   - non-number chars should be ignored
//
// output
//   - return a 10-digit number(String type)
//     - if input is bad: return ten '0's
//
// - check if there is any char other than 0-9, dot, dash, parentheses, space
// - for non-string types treat as invalid
// - strip non-number chars
// - check number of digits
//   - if 10 digits return it as it is
//   - if 11 digits
//     - if first digit is '1' return from index 1 to end index
//     - else treat as invalid
//   - if > 11 digits treat as invalid

function cleanUp(numStr) {
  let invalidOutPut = '0000000000'

  if (typeof numStr !== 'string' || /[^0-9\.\-\(\)\s]/.test(numStr)) return invalidOutPut;

  let strippedStr = numStr.replace(/[\.\-\(\)\s]/g, '');

  let digitAmount = strippedStr.length;
  if (digitAmount === 11 && strippedStr[0] === '1') {
    return strippedStr.slice(1);
  } else if (digitAmount === 10) {
    return strippedStr;
  } else {
    return invalidOutPut;
  }
}

// Test cases:

console.log(cleanUp('1234567890')); // '1234567890'
console.log(cleanUp('0000000000')); // '0000000000'
console.log(cleanUp('123-456-7890')); // '1234567890'
console.log(cleanUp('123.456.7890')); // '1234567890'
console.log(cleanUp('123 456 7890')); // '1234567890'
console.log(cleanUp('(123)(456)(7890)')); // '1234567890'
console.log(cleanUp('(123)-(456)  (789.0)')); // '1234567890'
console.log(cleanUp('-1234567890')); // '1234567890'
console.log(cleanUp('1234567890-')); // '1234567890'
console.log(cleanUp('11234567890'));// '1234567890'
console.log(cleanUp('112-345-678-90'));// '1234567890'
console.log(cleanUp('112-345(678) 9.0'));// '1234567890'
console.log(cleanUp('21234567890'));// '0000000000'
console.log(cleanUp('112345678900'));// '0000000000'
console.log(cleanUp('11'));// '0000000000'
console.log(cleanUp('a123456789'));// '0000000000'
console.log(cleanUp('')); // '0000000000'
console.log(cleanUp([])); // '0000000000'
