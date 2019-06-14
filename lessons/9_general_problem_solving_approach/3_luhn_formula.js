// input: a string of number(digits)
//   - may include empty space
//   - but not other chars
//
// output:
//   - for valid input
//     - true/false
//   - for invalid input
//     - false
//
// - check input validity
//   - if input includes any char other than 0-9 or \s, return false
// - clean up possible spaces
//   - replace /s+ with ''
// - process from RIGHT to LEFT
//   - set everySecond = false
//   - transform(recalculate current digit) in string form
//     - iterate through each char from last index(decremental index)
//       - convert string into integer
//       - if everySecond(true)
//         - times * 2
//           - if >= 10, minus 9
//        - everySecond = false
//       - else return current integer
//        - set everySecond to true;
// - add up digits
// - check result

// function luhnCheck(numStr) {
//   if (/[^0-9\s]/.test(numStr) || numStr === '')  return false;
//
//   let cleanedStr = numStr.replace(/\s/g, '');
//
//   let transformed = [];
//   let everySecond = false;
//   let currentNum;
//
//   for(let i = cleanedStr.length - 1; i >= 0; i -= 1) {
//     currentNum = parseInt(cleanedStr[i]);
//       if (everySecond) {
//         if (currentNum * 2 >= 10) { transformed.push(currentNum * 2 - 9)}
//         else { transformed.push(currentNum * 2) }
//         everySecond = false;
//       } else {
//         transformed.push(currentNum);
//         everySecond = true;
//       }
//     }
//   let sum = transformed.reduce((a, b) => a + b, 0);
//
//   return sum % 10 === 0 ? true : false;
// }

function luhnCheck(numStr) {
  if (/[^0-9\s]/.test(numStr) || numStr === '')  return false;

  let reversedDigits = numStr.replace(/\s/g, '').split('').reverse().map(d => Number(d));

  let transformed = reversedDigits.map((digit, index) => {
    if (index % 2 === 0) {
      return digit;
    } else {
      return digit * 2 >= 10 ? (digit * 2 - 9) : digit * 2;
    }
  })

  let sum = transformed.reduce((a, b) => a + b, 0);

  return sum % 10 === 0 ? true : false;
}

// invalid inputs
console.log(luhnCheck(''));
console.log(luhnCheck('123,456'));
console.log(luhnCheck('123 456-789'));
console.log('--------------------------------');

// true cases
console.log(luhnCheck('2323 2005 7766 3554'));
console.log(luhnCheck('8763'));
console.log('--------------------------------');

// false cases
console.log(luhnCheck('1111'));
