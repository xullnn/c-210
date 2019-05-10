// include first index
// exclude last index
// return new Array
function slice(arr, start, end) {
  var newArr = [];
  var ii = 0;
  for(var i = start; i < end; i += 1) {
    newArr[ii] = arr[i];
    ii += 1;
  }

  return newArr;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]


//
// slice from given start index(included)
  // move n elements to an new array
// source array has been mutated

function splice(arr, start, quantity) {
  var counter = 0;
  var newArr = [];
  for(var i = start; counter < quantity; i += 1) {
    newArr[counter] = arr[i];
    arr[i] = arr[i + quantity];
    counter += 1;
  }

  arr.length = arr.length - quantity;
  return newArr;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;

//
function concat(arr1, arr2) {
  var newArr = [];
  var ii = 0;
  for(var i = 0; i < arr1.length; i += 1) {
    newArr[ii] = arr1[i];
    ii += 1;
  }

  for(var i = 0; i < arr2.length; i += 1) {
    newArr[ii] = arr2[i];
    ii += 1;
  }

  return newArr;
}

concat([1, 2, 3], [4, 5, 6]);

//

function join(arr, sep) {
  var newStr = '';
  for(var i = 0; i < arr.length; i += 1) {
    newStr += arr[i];
    if (i !== arr.length - 1) newStr += sep;
  }

  return newStr;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
