// Write a JavaScript function that takes an array containing
// repeated elements and returns a two dimensional array.
// Each subarray contains identical elements grouped together.
//
// groupRepeatedElems([1, 1, 2, 2, 3, 3])
// // -> [[1, 1], [2, 2], [3, 3]]
//
// input:
//   an array contains repeated elements
//
// output:
//   an array(nested) which groups same elements together
//
// Data structure
//   Array
//   String
//
// Algorithm
//
// initialize an object to keep track of the occurences of each element
// {
//   1: [1],
//   2: [2],
//   3: [3],
// }
//
// if the input array is empty
//   return []
//
// Iterate through the input array
//   for each element
//     check if it is one of the key of the object
//       if it is: push the element into the key's value(sub array)
//       if it's not: assign an array `[key]` as the value
// return the values of the object


function groupRepeatedElems(array) {
  if (array.length === 0) return [];

  let recoreder = {};
  let key;

  array.forEach(e => {
    key = (typeof e) + e;
    if (recoreder[key]) {
      recoreder[key].push(e);
    } else {
      recoreder[key] = [e];
    }
  })

  return Object.values(recoreder);
}

console.log(groupRepeatedElems([1, 1, 2, 3, 2, 3])) // -> [[1, 1], [2, 2], [3, 3]]
console.log(groupRepeatedElems([1, 1, 2, 2, 3, 3])) // -> [[1, 1], [2, 2], [3, 3]]
console.log(groupRepeatedElems([1, 1, 1, 2, 2, 3, 3])) // -> [[1, 1, 1], [2, 2], [3, 3]]
console.log(groupRepeatedElems([1, 1, 2, 2, 3, 3, 4])) // -> [[1, 1], [2, 2], [3, 3], [4]]
console.log(groupRepeatedElems([1, 2, 3]))// -> [[1], [2], [3]]
console.log(groupRepeatedElems([])) // []
console.log(groupRepeatedElems([1, 1, 2, 3, 2, 3, '1']))
console.log(groupRepeatedElems([1, 1, 2, 3, 2, 3, '1', '2', '1']))
