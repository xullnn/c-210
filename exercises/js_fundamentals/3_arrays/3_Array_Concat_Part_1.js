// get a copy of arr1
// if second arg is an array Array.isArray(arg)
//   push element one by one
// else
//   push directly
// return new array

function concatenate(arr1, arg) {
  var newArr = arr1.slice();
  if (Array.isArray(arg)) {
    arg.forEach((e) => newArr.push(e));
  } else {
    newArr.push(arg);
  }

  return newArr;
}

concatenate([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concatenate([1, 2], 3);                     // [1, 2, 3]
concatenate([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concatenate([2, 3], 'four');                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concatenate([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concatenate(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;
