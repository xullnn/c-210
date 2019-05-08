// find out mulitples in a ascending order
//   - mulitply from 1, 2, 3
//     - break if product is greater than 100
//     - push product into array
// revers array
//   - iterate through the array
//     - log number

logMultiples(17);
logMultiples(21);

// function logMultiples(a) {
//   let products = [];
//   for(let i = 1; ; i += 1) {
//     let product = a * i;
//     if (product > 100) break;
//     if (product % 2 === 1) { products.unshift(product)}
//   }
//
//   products.forEach(function(product) {
//     console.log(product);
//   });
// }

// better one

// iterate from 100 downto 1
  // - if current number is odd and it can be divided by the given argument
  //   - log it
  //

// function logMultiples(a) {
//   for(let i = 100; i >= a; i -= 1) {
//     if (i % 2 === 1 && i % a === 0) {
//       console.log(i);
//     }
//   }
// }

// furhter exploration
  // - find the largest mulitple less than 100
  // - from the largest mulitple decrement by a every time(while checking if it's odd?)


function logMultiples(a) {
  var max_multiple = Math.floor(100 / a) * a;
  for(var i = max_multiple; i >= a; i -= a) {
    if (i % 2 === 1) console.log(i);
  }
}
