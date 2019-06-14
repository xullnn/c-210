// map through original array || use reduce directly
  // slice from 0 to index + 1
  // reduce to find inner sum
// reduce to the outer sum

function sumOfSums(numbers) {
  return numbers.reduce((acc, _, index) => acc + numbers.slice(0, index + 1).reduce((a ,b) => a + b), 0)
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
