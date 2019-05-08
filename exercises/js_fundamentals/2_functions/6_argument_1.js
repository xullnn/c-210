var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// inside function myValue
// the expanded form of `b += 10` is `b = b + 10`
  // when we pass `a` to the function, we are actually passing integer 7 as the argument
  // on the left side of the expression `b = b + 10`
  // primitive values in Javascript are immutable
  // throughout the process, variale `a` is never changed

// 7
