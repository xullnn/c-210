var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// if currentInt < 0, negative = true
// currentInt *= -1 convert it to positive
// do
  // currentInt % 10 to get the last digit
  // currentInt / 10 then floor to update currentInt(used in next iteration)
  // prepend DIGITS[last digit] to str
// while (currentInt > 0)
// if negative '-' + str
// return str
var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(int) {
  var currentInt = int;
  var numStr = '';
  var lastDigit;

  if (int < 0) {
    var negative = true;
    currentInt *= -1;
  }

  do {
    lastDigit = currentInt % 10;
    currentInt = Math.floor(currentInt / 10);
    numStr = DIGITS[lastDigit] + numStr;
  } while (currentInt > 0)

  if (negative) {
    numStr = '-' + numStr;
  } else {
    numStr = '+' + numStr;
  }
  return numStr;
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
