runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// initialize a accumulator to hold running total (from 0)
// iterate through the given array
  // update value of acc, push it into result array

function runningTotal(arr) {
  var result = [];
  var acc = 0

  arr.forEach(function(e) {
    acc += e;
    result.push(acc);
  })

  return result;
}

// map

function runningTotal(arr) {
  var acc = 0;
  return arr.map(e => acc += e);
}
