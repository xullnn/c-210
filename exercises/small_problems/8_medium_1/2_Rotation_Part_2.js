// (735291, 3)
//   rotate the last 3 digits 291
//   for 291 roate first digit to the last => 912
//   join them back

// convert number to string
// divide string number into two parts based on second argument
//   735291 => '735291' => '735', '291'
// rotate the second part => '912'
// join the two parts together
// convert it back to number

// how to roate a string like '291'
  // string.slice(1) + string[0]

function rotateString(string) {
  return string.slice(1) + string[0]
}

function rotateRightmostDigits(number, n) {
  let numStr = String(number);
  let splitIndex = numStr.length - n;
  let pre = numStr.slice(0, splitIndex);
  let rear = numStr.slice(splitIndex);

  return Number(pre + rotateString(rear));
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
