function showMultiplicativeAverage(numbers) {
  var product = numbers.reduce((acc, e) => acc * e);
  return (product / numbers.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
