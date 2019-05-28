// slice
function slice(arr, start, end) {
  var newArr = [];
  var arrLength = arr.length;

  if (start > arrLength) start = arrLength;
  if (end > arrLength) end = arrLength;

  for(var i = start; i < end; i += 1) {
    newArr.push(arr[i]);
  }

  return newArr;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
arr;                                  // [1, 2, 3]


// splice
// remove and insert

// remove
  // - initialize a new array
  // - return new array if count === 0(defend clause)
  //
  // - extract `deleteCount` elements from `start`
  // - move indexes
  //   - from last element forward
  //   - arr[i - count] = arr[i]
  // - shorten length by count
  //
  // // insert
  //   - lengthen array by elements.length
  //   - set a counter to keep track of how many times we have moved
  //   - move rear elements to fill the 'gap'
  //     - move from the last element(i is the last index)
  //     - arr[i] = arr[i-elements.length]
  //     - stop when counter is incremented to elements.length
  //   - now we have the 'gap' in the middle of the array
  //   - insert from `start`
  //      - arr[start] = args[0]
  //      - arr[start + 1] = args[1]
  //      - ...
  //   - return new array


function splice(arr, start, deleteCount, ...elements) {
  var removed = [];

  removed = arr.slice(start, start + deleteCount);

  for(let i = start; i < (start + deleteCount); i += 1) {
    arr[i] = arr[i + deleteCount]
  }

  arr.length = arr.length - deleteCount;

  var numOfInserts = elements.length;
  
  arr.length = arr.length + numOfInserts;

  var counter = 0;
  for(let i = arr.length - 1; counter < arr.length - 1 - start; i -= 1) {
    arr[i] = arr[i - numOfInserts];
    counter += 1
  }

  for(let ii = 0; ii < numOfInserts; ii += 1) {
    arr[start + ii] = elements[ii];
  }

  return removed;
}

var arr = [1, 2, 3, 4];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
console.log(arr);   // [1, "two", "three", 4]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
console.log(arr);                                  // ["a", 1, 2, 3]
