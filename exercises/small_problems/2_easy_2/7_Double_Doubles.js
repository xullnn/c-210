// if number is double number abcabc
  // don't change it
// else
  // times 2
// return processed number

// how to determine if a number is double number?
//   - convert it to string
//   - if length is odd then it's not
//   - else
//     - string.substring(0, length / 2) === string.substring(length / 2)
//

function twice(number) {
  var numStr = String(number);
  var length = numStr.length;
  if (numStr.substring(0, length / 2) === numStr.substring(length / 2)) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
