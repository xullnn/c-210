// -----------------------------------------------------------------------------

var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// ************************************

function testScope() {
  var a = 'inner';
  console.log(a);
}

var a;

a = 'outer';

console.log(a);  // 'outer' (global level variable)
testScope();     // 'inner' function scope variable
console.log(a);  // 'outer' (global level variable)

// ************************************

// -----------------------------------------------------------------------------

var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// ************************************

function testScope() {
  a = 'inner';
  console.log(a);
}

var a;

a = 'outer';

console.log(a);   // 'outer' global variable
testScope();      // 'inner' inside testScope function it override the global `a` defined previously
console.log(a);   // 'inner', as describe above, `a` has been overriden

// ************************************

// -----------------------------------------------------------------------------

var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

// ************************************

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);  // #1

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);  // #2
  }

  shop1();
  shop2();
  shop3();

  console.log(basket); //#3
}

var basket;
basket = 'empty';
goShopping();

// This is a nested function declaration which has 3 sub-function inside the main function body
// before calling `goShopping();`, `basket` was pointing to 'empty'
// when invoking `goShopping()`
  - #1 console.log(basket) => 'empty'
  - call `shop1()`, `basket` is overrided to 'tv'
  - call `shop2()`, `basket` is overriden to 'computer'
  - call `shop3()`, the use of `var` inside a function declaration won't affect outer socpe
    - #2 console.log(basket); => 'play station'
  - #3 console.log(basket); => 'computer'

// ************************************

// -----------------------------------------------------------------------------

function hello() {
  a = 'hello';
}

hello();
console.log(a);

// ************************************

var a;
a = 'hello';

function hello() {
}

hello();
console.log(a); // 'hello'

// ************************************

// -----------------------------------------------------------------------------

function hello() {
  var a = 'hello';
}

hello();
console.log(a);

// ************************************

// var a = 'hello'; inside function declaration body has function scope
// so we can't access it at the outer scope
// raise reference error

// ************************************

// -----------------------------------------------------------------------------

console.log(a);

var a = 1;

// ************************************

var a;
console.log(a);
a = 1;

// undefined;

// ************************************

// -----------------------------------------------------------------------------

console.log(a);

function hello() {
  a = 1;
}

// ************************************
function hello() {
  a = 1;
}

console.log(a);

// reference error, `hello()` is never invoked so `a = 1` is never executed

// ************************************

// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
