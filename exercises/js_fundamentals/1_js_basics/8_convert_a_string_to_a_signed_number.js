// test for the first char
  // if first char is '-1'
  // then set negative to true

// use string.match(/\d/g).reverse() to get the reversed chars
// then utilize the previous function

function stringToSignedInteger(str) {
  if (str[0] === '-') var negative = true;
  var reversedChars = str.match(/\d/g).reverse();
  var number = 0;

  for(let i = 0; i < str.length; i += 1) {
    for(let n = 0; n <= 9; n += 1) {
      if (n.toString() === reversedChars[i]) {
        number += (n * Math.pow(10, i));
      }
    }
  }

  return negative ? number * -1 : number;
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
