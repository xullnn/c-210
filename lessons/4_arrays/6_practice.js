function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// return first n elements from the array

function firstNOf(arr, n) {
  return arr.slice(0, n);
}


// return last n elements from the array

function lastNOf(arr, n) {
  return arr.slice(arr.length - n);
}

// return last n elements from the array
// if n is out of the range, return a new copy of the whole array

function lastNOf(arr, n) {
  if (n > arr.length) return arr.slice(0)
  return arr.slice(arr.length - n);
}


var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);

// first and last element

function endsOf(arr1, arr2) {
  return arr1.slice(0, 1).concat(arr2.slice(-1));
}

endsOf([4, 8, 15], [16, 23, 42]); 
