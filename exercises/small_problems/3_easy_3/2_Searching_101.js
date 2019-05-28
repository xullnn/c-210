// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
//
// The number 17 appears in [25, 15, 20, 17, 23].
//
// -----
//
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
//
// The number 18 does not appear in [25, 15, 20, 17, 23].

// npm i readline-sync
var rlSync = require('readline-sync');

function wordNumber(number) {
  let result;
  switch (number) {
    case 1: result = '1st'; break;
    case 2: result = '2nd'; break;
    case 3: result = '3rd'; break;
    case 6: result = 'last'; break;
    default: result = String(number) + 'th';
  }

  return result;
}

var counter;
var answer;
var numbers = [];

for(counter = 1; counter <= 6; counter += 1) {
  answer = parseInt(rlSync.question(`Enter the ${wordNumber(counter)} number:`));
  if (counter < 6) numbers.push(answer);
}

if (numbers.includes(answer)) {
  console.log(`The number ${answer} appears in ${numbers}`);
} else {
  console.log(`The number ${answer} does not appear in ${numbers}`);
}
