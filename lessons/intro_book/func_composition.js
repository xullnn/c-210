function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum)

let difference = subtract(80, 10);
console.log(difference);

function times(a, b) {
  return a * b;
}

console.log(times(add(20, 45), subtract(80, 10)));
