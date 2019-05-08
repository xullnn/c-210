// function sum(a, b, c) {
//   return (a + b + c);
// }
//
// function average(a, b, c) {
//   let result = sum(a, b, c) / 3;
//   return result;
// }
//
// console.log(average(3, 3, 3));
// console.log(average(3, 6, 3));

function sum(numbers) {
  let total = 0;
  for(i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total
}

function average(numbers) {
  return sum(numbers) / numbers.length
}

temperatures = [22, 32, 24, 31, 38];
console.log(average(temperatures));
