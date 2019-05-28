var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// map or slice() to get a copy of the array
var myOtherArray = myArray.map((e) => e);
var myOtherArray = myArray.slice();
