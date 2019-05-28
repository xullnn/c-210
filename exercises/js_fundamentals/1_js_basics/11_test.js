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

SIGNS = { '-1': '-', 0: '', 1: '+' };

function signedIntegerToString(num) {
  return SIGNS[Math.sign(num)] + integerToString(Math.abs(num));
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
