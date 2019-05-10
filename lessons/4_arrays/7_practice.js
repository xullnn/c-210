function oddElementOf(arr) {
  var newArr = [];
  for(var i  = 1; i < arr.length; i +=2) {
    newArr.push(arr[i])
  }

  return newArr;
}

//

// function combinedArray(even, odd) {
//   var i = 0;
//   var newArr = [];
//   while (i < even.length) {
//     newArr.push(even[i]);
//     newArr.push(odd[i]);
//     i += 1;
//   }
//
//   return newArr;
// }

function combinedArray(even, odd) {
  var newArr = [];

  for(var i = 0; i < even.length; i += 1) {
    newArr.push(even[i]);
    newArr.push(odd[i]);
  }

  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]


//

// this solution also changed the caller array
// function headAndTail(arr) {
//   var head = arr.slice(0);
//   var tail = arr.reverse();
//   return (head.concat(tail));
// }

arr.concat(arr.slice().reverse());

//

function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function(a,b) {
    return b - a;
  })
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


//

// map
  // reduce

function matrixSums(arr) {
  return arr.map((sub) => sub.reduce((acc, n) => acc + n))
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);

// unique array

function uniqueElements(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i += 1) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);
