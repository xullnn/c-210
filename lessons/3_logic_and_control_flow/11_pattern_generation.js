generatePattern(9);
generatePattern(20);

// console output
  // 1******
  // 12*****
  // 123****
  // 1234***
  // 12345**
  // 123456*
  // 1234567

// generate an array: [1, 12, 123, ...1234567]
// map through array
  // use String.prototype.padEnd(7, '*')

// ----------------------------
// initialize an empty string ''
// loop from 1 to n
//   string = string + String(current number)
//   log: String.prototype.padEnd(n, '*')

function generatePattern(n) {
  var width = 0;
  if (n < 10) {
    width = n;
  } else {
    width = 9 + (n - 9) * 2
  }

  var str = ''
  for(i = 1; i <= n; i += 1) {
    str = str + String(i);
    if (i < 10) {
    console.log(str.padEnd(width, '*'));
    } else {
    console.log(str.padEnd(width, '*'))
    }
  }
}
