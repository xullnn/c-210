// notice the hoisting mechanism

// This is function declaration
// We can call the function before we define it(in this js file)

sayHi();

function sayHi() {
  console.log('Hi');
}


// Use function declaration

// Raise error: TypeError: sayHi is not a function

sayHi();

var sayHi = function sayHi() {
  console.log('Hi');
}

// This is equivalent to

var sayHi;

sayHi();

function sayHi() { // create function and override variable `sayHi`
  console.log('Hi');
}
