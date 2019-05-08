var rlSync = require('readline-sync');

var number = parseInt(rlSync.question('Please enter an integer greater than 0: '));
var operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === 's') {
  console.log(sum_to(number));
} else if (operation === 'p') {
  console.log(product_to(number));
} else {
  console.log('Invalid operation.');
}

function sum_to(n) {
  var sum = 0;
  var i = 1;
  while (i <= n) {
    sum += i;
    i += 1
  }

  return sum
}

function product_to(n) {
  var product = 1;
  var i = 2;
  while (i <= n) {
    product *= i;
    i += 1;
  }

  return product
}

// array version
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sum_reducer = (acc, n) => acc + n;
const product_reducer = (acc, n) => acc * n;

[1, 2, 3, 4].reduce(product_reducer);
[1, 2, 3, 4].reduce(sum_reducer);
