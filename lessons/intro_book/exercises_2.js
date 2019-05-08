// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for(i = 0; i < myArray.length; i += 1) {
//   if(myArray[i] % 2 === 0) {
//     console.log(myArray[i])
//   }
// }

// let filtered;
// filtered = myArray.filter((e) => e % 2 === 0);
// filtered.forEach((e) => console.log(e));

// myArray.forEach(function(e) {
//   if (e % 2 === 0) {
//     console.log(e);
//   }
// });

// flatten then get a new arr
// perform same operation
//
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// let flattened = [];
// myArray.forEach(function(sub_arr) {
//   sub_arr.forEach(function(e) {
//     if (e % 2 === 0) { flattened.push(e) }
//   });
// });
//
// console.log(flattened);
// flattened.forEach(function(e) {
//   if (e % 2 === 0) {
//     console.log(e);
//   }
// });

// use nested iteration
  // collect even numbers into an preinitialized variable(empty array)
//
// myArray.forEach(function(sub_arr) {
//   sub_arr.forEach(function(e) {
//     if (e % 2 === 0) {
//       console.log(e);
//     };
//   });
// });

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
//
// let new_arr;
// new_arr = myArray.map(function(e) {
//   if (e % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// });
//
// console.log(new_arr);

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// function removeNonInteger(array) {
//   let new_arr = [];
//   array.forEach(function(e) {
//     if (Number.isInteger(e)) {
//       new_arr.push(e);
//     }
//   });
//   return new_arr
// }

// function removeNonInteger(array) {
//   return array.filter((e) => Number.isInteger(e));
// }

// function removeNonInteger(array) { return array.filter(Number.isInteger); }
//
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(arr) {
  return arr.map((e) => {return e.length}).filter(function(l) {
    if (l % 2 === 1) {
      return l;
    }
  })
}
console.log(oddLengths(arr)); // => [1, 5, 3]
