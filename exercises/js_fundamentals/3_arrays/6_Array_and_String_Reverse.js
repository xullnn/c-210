function reverse(arg) {
  var reversed;

  if (typeof arg === 'string') {
    reversed = '';
    for(var i = arg.length - 1; i >= 0; i -= 1) {
      reversed += arg[i];
    }
  } else if (Array.isArray(arg)) {
    reversed = [];
    for(var i = arg.length - 1; i >= 0; i -= 1) {
      reversed.push(arg[i])
    }
  }

  return reversed;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array; 
