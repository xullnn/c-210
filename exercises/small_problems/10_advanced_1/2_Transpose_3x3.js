var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var matrix1 = [
  [1, 5, 8, 0],
  [2, 3, 4, 9]
];

function transpose(matrix) {
  return matrix[0].map((_, index) => {
    return matrix.map(subArray => subArray[index]);
  })
}
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(transpose(matrix));      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(transpose(matrix1));      // [[1,2], [5,3], [8,4], [0,9]]


// [    0  1  2
// 0:  [1, 5, 8]
// 1:  [4, 7, 2]
// 2:  [3, 9, 6]
// ]

// map through the outer arr with index
//   for every iteration
//     perform a inner map iteration: return subarray[index(outer)]
