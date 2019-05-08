// integers(>1) which can be only divided by 1 and itself

// from the number itself
  // decrement by 1 every time
    // at any time if the number can be divided without a remainder
      // return false
  // after the whole iteration complete return true

function isPrime(number) {
  if (number < 2) return false;
  for(var i = (number - 1); i > 1; i -= 1) {
    if (number % i === 0) return false;
  }
  return true;
}

// false
// true
// true
// true
// false
// false

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));
