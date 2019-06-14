// It takes an array and a function as arguments, and optionally, a third argument
// that serves as an initial value. If the caller omits the initial value, myReduce
// should use the first element of the Array as the initial value. myReduce should
// return the value returned by the last invocation of the callback function.

// args:
//   - array
//   - function obj
//   - initial value(optional, default to first element in the array)
//
// return value:
//   - return value of the last function(passed) invocation

function myReduce(array, func, initial) {
  let i;

  if (initial === undefined) {
    i = 1;
    initial = array[0]
  } else {
    i = 0;
  }

  for(;i < array.length; i += 1) {
    initial = func(initial, array[i])
  }

  return initial;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

//

function longestWord(words) {
  return myReduce(words, longest)
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
