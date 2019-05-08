// function factorial(n) {
//   if (n <= 1) return 1;
//   let result = n;
//   while (n >= 2) {
//     result = result * (n - 1);
//     n -= 1;
//   }
//   return result;
// }

function factorial(n) {
  if (n < 2) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
