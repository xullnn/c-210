// initialize a counter = 1
// initialize a container tring
// increment from 1 to n
//   - if odd => 1
//   - if even => 0
// return string
//

function stringy(n) {
  var newStr = '';
  for(var i = 1; i <= n; i += 1) {
    if (i % 2 === 1) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }

  return newStr;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
