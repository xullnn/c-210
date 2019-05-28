var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// line 4 mutated the array
// so line 5: [1,2,3]

// line 7 reassign the variable `myArray` but has nothing to do with `myOtherArray`
// so line 8 is: [1,2,3]
