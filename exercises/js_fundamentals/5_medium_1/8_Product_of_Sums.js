function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0; // if we don't initialize it to 0 here the value will be undefined
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // undefined + first number will evalute to NaN
  }

  return sum;
}

productOfSums([1,2,3], [2,3])
