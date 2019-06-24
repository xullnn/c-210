//
// [1, 1, 3], [2, 2]
//
// create a container array
// copy the two arrays
//   compare the first element from both arrays
//   push the smaller one(shift it from the array)
//   once one of the element is undefined concat them


// how to find out the 'longer' array?
//   arrays.reduce((a,b) => a.length > b.length ? a : b)
//
// how to compare two numbers: Math.max(a, b), Math.min(a, b)

function merge(arr1, arr2) {
  let result = [];
  let copy1 = arr1.slice(0);
  let copy2 = arr2.slice(0);

  while (copy1[0] && copy2[0]) {
    copy1[0] <= copy2[0] ? result.push(copy1.shift()) : result.push(copy2.shift());
  }

  return result.concat(copy1).concat(copy2);
}



console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
