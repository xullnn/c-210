// rotate the whole string
// rotate 1 to the end
// rotate 2 to the end
// ...
// no more rotation

// first 0 char + rotate 0  to end
// first 1 char + roate 1 to end
// first 2 char + rotate 2 to end
// ...

// initialize an empty string
// iterate through string with index
//   update string to string.slice(0, index) + rotate(string.slice(index))

function maxRotation(number) {
  let numStr = String(number);
  let result = numStr.repeat(1);

  for(let i = 0; i < numStr.length; i += 1) {
    result = result.slice(0, i) + rotateString(result.slice(i));
  }

  return Number(result);
}


function rotateString(string) {
  return string.slice(1) + string[0]
}


// utilize the previous solution

function rotateRightmostDigits(number, n) {
  let numStr = String(number);
  let splitIndex = numStr.length - n;
  let pre = numStr.slice(0, splitIndex);
  let rear = numStr.slice(splitIndex);

  return Number(pre + rotateString(rear));
}

function maxRotation(number) {
  for(let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i)
  }

  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
