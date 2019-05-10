function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

var count = [0, 1, 2];
push(count, 3);         // 4
count;

//

function pop(arr) {
  var lastEle = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastEle;
}

var count = [1, 2, 3];
pop(count);             // 3
count;

//

// lengthen the length of the arr by one
// move elements from the rear of the arr one by one
// substitude the first `undefined` with the given inst

function unshift(arr, inst) {
  arr.length = arr.length + 1;

  for(i = arr.length - 1; i >= 1; i -= 1) {
    arr[i] = arr[i -1];
  }

  arr[0] = inst;

  return arr.length;
}

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]

// we don't have to lengthen it first

function unshift(arr, inst) {
  for(var i = arr.length; i >= 1; i -=1) {
    arr[i] = arr[i - 1];
  }

  arr[0] = inst;
  return inst;
}

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;

//

function shift(arr) {
  var firstEle = arr[0];
  if (arr === []) return undefined;
  for(var i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return firstEle;
}

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]
