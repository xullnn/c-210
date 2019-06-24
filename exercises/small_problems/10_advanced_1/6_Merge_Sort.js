// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
//
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]
//
// map through the original array
//   reutrn [element] on each iteration
//
// if new array.length is odd, push an empty array in it
// while (new merged array.length > 1) shift out two element from the new array
// initialize a empty array as container
//   merge every consecutive two arrays
//   push the merged array into container
//   update the iteration array to the new merged array

function merge(arr1, arr2) {
  let result = [];
  let copy1 = arr1.slice(0);
  let copy2 = arr2.slice(0);

  while (copy1[0] && copy2[0]) {
    copy1[0] <= copy2[0] ? result.push(copy1.shift()) : result.push(copy2.shift());
  }

  return result.concat(copy1).concat(copy2);
}

function mergeSort(array) {
  let newArray = array.map(e => [e]);
  let resultArray;
  if (newArray.length % 2 === 1) newArray.push([]);

  while (newArray.length > 1) {
    resultArray = [];
    for(let i = 0; i <= newArray.length - 2; i += 2) {
      resultArray.push(merge(newArray[i], newArray[i+1]))
    }
  
    newArray = resultArray
  }

  return resultArray.flat()
}



mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
