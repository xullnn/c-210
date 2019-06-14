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

// input: a string number
//
// output: a number string that can pass the luhn check which transformed from the
//         original number by appending one number to the end.
//
// Example:
//   from '2323 2005 7766 355' to '2323 2005 7766 3554'

// - the appended number should be as small as possible
// - the appended number should make the compound number valid for luhn check
//
// check luhn validity for the input string
//   - if input string is valid return string
//   - set appendedDigit to 0
//   - loop
//     current number = original string + String(appended)
//     check if the new string is valid
//     if so break
//     increment appendedDigit by 1

function toLuhn(numStr) {
  if (luhnCheck(numStr)) return true;

  for(let appended = 0; appended <= 9; appended += 1) {
    if (luhnCheck(numStr + appended)) return (numStr + appended);
  }
}

console.log(toLuhn('2323 2005 7766 355')) // '2323 2005 7766 3554'
console.log(toLuhn('1111')) // '11114'
