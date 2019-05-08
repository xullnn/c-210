// let rlSync = require('readline-sync');
//
// function getNumber(prompt) {
//   return Number(rlSync.question(prompt));
// }
//
// let first = getNumber('Enter the first number:')
// let second = getNumber('Enter the second number:')
//
// let mulitply = (a, b) => a * b;
//
// console.log(`${first} times ${second} = ${mulitply(first, second)}`);
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

times(5, times(4, times(3, times(2, times(1, 1)))));

times(times(times(times(times(1 ,1), 2), 3), 4), 5);
