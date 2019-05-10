bar();             // logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}

// is equivalent to:

function bar() {
  console.log('world');
}

var bar;

bar();

bar = 'hello';

// -------------------------------------------

var bar = 'hello';
bar();             // raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}

// is equivalent to:

function bar() {
  console.log('world');
}

var bar;
bar = 'hello';
bar();
