// shift

  // use splice

function shift(arr) {
  if (arr.length === 0) return undefined;
  return arr.splice(0, 1)[0];
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);

// unshift
function unshift(arr, ...args) {
  args.forEach((arg) => arr.splice(0, 0, arg))

  return arr.length;
}

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

// without splice
// shift
  // record first e
  // iterate from second e
  //   e[i-1] = e[i]
  // shorten arr's length by 1

function shift(arr) {
  if (arr.length === 0) return undefined;
  var first = arr[0];

  for(var i = 1; i < arr.length; i += 1) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1;
  return first;
}

// unshift
  // outer wrapped iteration through args
    // lengthen arr by 1
    // iterate from last e
    //   e[i] = e[i - 1]
    // return arr length

function unshift(arr, ...args) {
  args.forEach(function(arg) {
    arr.length = arr.length + 1;

    for(var i = arr.length - 1; i >= 1; i -= 1) {
      arr[i] = arr[i - 1];
    }

    arr[0] = arg;
  })
  
  return arr.length;
}
