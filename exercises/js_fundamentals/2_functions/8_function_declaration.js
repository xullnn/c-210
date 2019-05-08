logValue();

function logValue() {
  console.log('Hello, world!');
}

//

// function declaration will be hoisted to the top of the script
// so the function call at first line will work out ok
// 'Hello world'


var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

//

function logValue() {
  console.log('Hello, world!');
}

var logValue;
logValue = 'foo';
console.log(typeof logValue); // string
