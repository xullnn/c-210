// What will the following code snippets log?
//
// Code Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// after hoisted:
//
// function counter(count) {
//   // ...
// }
//
// var rate;
// counter = 5;
// rate = 3;
//
// console.log('The total value is ' + String(counter * rate));
//
// So:
//
// 'The total value is 15'


//
// Code Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// after hoisted:
//
// function counter(count) {
//   // ...
// }
//
// var rate;
//
// console.log('The total value is ' + String(counter * rate));
//
// counter = 5;
// rate = 3;
//
// So:
//
// counter * rate => undefined * undefined => NaN
//
// 'The total value is NaN'
//


// Code Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// after hoisted:
//
// function counter(count) {
//   // ...
// }
//
// var rate;
// counter = 5;
// rate = 3;
//
// console.log('The total value is ' + String(counter * rate));
//
//
// So:
//
// 'The total value is 15'
