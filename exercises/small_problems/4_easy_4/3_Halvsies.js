// 5 => 2.5 =floor=> 2 slice(0, 2) => [0, 1] X
//
// 5 => 2.5 =ceil=> 3 slice(0, 3) => [0, 1, 2] odd
//   slice(3) => [3, 4]
//
// 6 => 3 =ceil=> 3 slice(0, 3) => [0, 1, 2] even
//   slice(3) => [3, 4, 5]

function halvsies(arr) {
  var midIndex = Math.ceil(arr.length / 2);
  return [arr.slice(0, midIndex), arr.slice(midIndex)]
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
