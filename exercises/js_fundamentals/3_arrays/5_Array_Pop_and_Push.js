// pop
function pop(arr) {
  if (arr.length === 0) return undefined;
  var last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

var array = [1, 2, 3];
pop(array);                        // 3
console.log(array);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]


// push

function push(args) {
  var arr = arguments[0];
  for(var i = 1; i < arguments.length; i += 1) {
    arr[arr.length] = arguments[i];
  }

  return arr.length;
}

var array = [1, 2, 3];
push(array, 4, 5, 6);              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0
