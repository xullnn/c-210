// initialize an empty object
// iterate through the numbers
// record times of occurence for each number
// fetch the key which has the value of 2

function findDup(numbers) {
  let counts = {};
  numbers.forEach(number => {
    if (counts[number]) {
      counts[number] += 1;
    } else {
      counts[number] = 1;
    }
  })

  return Object.keys(counts).find(key => counts[key] === 2);
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// given solution

// since it told other numbers appear only once
// we can return the number immediately once we met it the second time

// this function can't work because `return` and `break` and `continue` not work in a `forEach()` block
// https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1
// function findDup(numbers) {
//   let appeared = {};
//
//   numbers.forEach(number => {
//     if (appeared[number]) {
//       return number;
//     } else {
//       appeared[number] = true;
//     }
//   })
// }


// so you have to use for to implement this function

function findDup(numbers) {
  let appeared = {};
  let currentNum

  for(let i = 0; i < numbers.length; i += 1) {
    currentNum = numbers[i];
    if (appeared[currentNum]) return currentNum;
    appeared[currentNum] = true;
  }
}
