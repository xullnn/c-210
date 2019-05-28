var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// the value of `sum` after the for loop is 20
// array.length returns 2
// array.length only return the number of "elements"
  // if we want to count the non-elements, we cound use `Object.keys(array).length`

// other than a non-negative integer
