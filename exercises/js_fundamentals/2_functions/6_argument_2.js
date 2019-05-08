var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// in this case `a = a + 10`
// the left side of the expression
  // a references the global scope variable `a`
// the right side of the expression it represent the integer 7
// 17
