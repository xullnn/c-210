// square of sum - sum of squares
// write a function to add up arbitrary number of numbers

function sumSquareDifference(n) {
  let numbers = [];
  for(let i = 1; i <= n; i += 1) numbers.push(i);
  let squareOfSum = Math.pow(numbers.reduce((a, b) => a + b), 2);
  let sumOfSquares = numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);

  return squareOfSum - sumOfSquares;
}

// simply use a for loop to get sum and sumOfSquares

function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for(let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
