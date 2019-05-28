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

var SIGNS = { 1: '+', 0: '', '-1': '-' }

function signedIntegerToString(int) {
  return SIGNS[Math.sign(int)] + integerToString(Math.abs(int));
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
