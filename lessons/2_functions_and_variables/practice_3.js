// -----------------------------------------------------------------------------

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// ************************************

function say() {
  var a; // <==============

  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// undefined
// ************************************

// -----------------------------------------------------------------------------

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// ************************************

// variable declaration inside conditional is hoisted to the top of the function
// declaration body

// > if (false) { var x = 1 }
// undefined
// > x
// undefined
// >

// hello
// reference error

// ************************************

// -----------------------------------------------------------------------------

var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);
// ************************************

var a = 'hello';

var a = 0;
var a = 1;
// ...
var a = 4;

// ************************************

// -----------------------------------------------------------------------------

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);
// ************************************
function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

var a;
a = 1;
console.log(foo());
console.log(a);

// 4 return value of `foo()` is 4
// 3 the last time `a` get assigned is inside `bar()` function

// ************************************

// -----------------------------------------------------------------------------

var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);
// ************************************

function checkScope() {
  var a = 'local';            // function scope
  function nested() {
    var a = 'nested';         // function scope
    function superNested() {
      a = 'superNested';      // global scope
      return a;
    }

    return superNested();
  }

  return nested();
}

var a = 'global';

console.log(checkScope());
console.log(a);

// 'superNested'
// 'global' if we use `var` to delcare a variable, then the variable's scope will
// be function scope
// in this case, `var a = 'local';` inside checkScope() function is delcaring a new function scope `a`
// if we don't use `var` inside the function, then we are accessing the global level variable
// the key is "Where the variable is first declared?"

// ************************************

// -----------------------------------------------------------------------------

var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
// ************************************

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

var a;
var b;
a = 'outer';
b = 'outer';

console.log(a);  // 'outer'
console.log(b);  // 'outer'
setScope(a);     // initialize a new global variable `foo` to 'inner', also `b` got reassigned
console.log(a);  // 'outer'
console.log(b);  // 'inner'

// ************************************

// -----------------------------------------------------------------------------

var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
// ************************************

function incrementBy(increment) {
  total += increment;
}

var total = 50;
var increment = 15;

console.log(total); // 50
incrementBy(10);    // undefined
console.log(total); // 60
console.log(increment); // 15

// ************************************

// -----------------------------------------------------------------------------

var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
// ************************************

var a = 'outer';
var setScope;

console.log(a); // 'outer'
setScope();     // raise error
console.log(a);

setScope = function () {
  a = 'inner';
};


// ************************************

// -----------------------------------------------------------------------------
