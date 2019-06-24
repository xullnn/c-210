// Example 1
// before
var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// after rotation

// 3  4  1
// 9  7  5
// 6  2  8


// Example 2
// before
// 3  4  1
// 9  7  5
// after
// 9  3
// 7  4
// 5  1


// duplicate the array and reverse it
// take one sub array and map through its indexes
//   map through the outer array (in reversed order)
//     return subArray[index]

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  let reversedArr = matrix.slice(0).reverse();

  return matrix[0].map((_, index) => {
    return reversedArr.map(subArray => subArray[index]);
  })
}

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
