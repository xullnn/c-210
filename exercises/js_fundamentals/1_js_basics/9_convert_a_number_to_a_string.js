// 4321
//
// 4321 / 10^3 .floor => 4
// 4321 % 1000 => 321 (next)
//
// 321 / 10^2 .floor => 3
// 321 % 100 => 21 (next)
//
// 21 / 10^1 .floor => 2
// 21 % 10 => 1 (next)
//
// 1 / 10^0 .floor => 1
// 1 % 1 => 1 (last)
//
// digits: [4, 3, 2, 1]
//
// str = ''
// map through
//   str += String.fromCharCode(48 + digit)
//
// return str
function integerToString(int) {
  var str = '';
  return digitsOf(int).map(digit => String.fromCharCode(48 + digit)).join('');
}

function digitsOf(int) {
  var digits = [];
  var currentDigit = int;
  for(let power = (lengthOf(int) - 1); power >= 0; power -= 1) {
    digits.push(Math.floor(currentDigit / Math.pow(10, power)));
    currentDigit %= Math.pow(10, power);
  }

  return digits;
}

function lengthOf(int) {
  if (int === 0) return 1;

  var nthPower = 0;
  var remainder;

  while (true) {
    remainder = int % (Math.pow(10, nthPower));
    if (remainder === int) return nthPower;
    nthPower += 1;
  }
}


//

// nextNum = 4321
//
// rearDigit = 4321 % 10;
// nextNum = Math.floor(4321 / 10) => 432
// concatnate str + DIGITS[rearDigit]

var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  var nextNum = int;
  var strNum = '';

  do {
    rearDigit = nextNum % 10;
    nextNum = Math.floor(nextNum / 10);
    strNum = DIGITS[rearDigit] + strNum;
  } while (nextNum > 0)

  return strNum;
}
