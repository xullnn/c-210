// greatest common divisor: the biggest number that can be both numbers' divisor
  // or say: the greatest number that can get a remainder of 0 when %ed with both numbers

// check if the smaller number is the gcd
// iteration
  // decrement from the smaller number (by)
  // return if n === 1
  // if both % n === 0
    // find and return
  // else next iteration

function gcd(a, b) {
  var smaller = Math.min(a, b);
  var bigger = Math.max(a, b);
  var current = smaller
  while (true) {
    if (current === 1) {
      return current;
    } else if (bigger % current === 0 && smaller % current === 0) {
      return current;
    }
    current -= 1;
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

// mulitple numbers version
// utilize the existent one
// what's the base case?
  // there only left 2 numbers in the array
// can't figure out a recursive version
