
function missing(arr) {
  var newArr = [];
  var number = arr[0];
  while (number < arr[arr.length - 1]) {
    number += 1;
    if (!arr.includes(number)) {
      newArr.push(number);
    }
  }

  return newArr;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);
