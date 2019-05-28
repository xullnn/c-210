var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);   // 'a'
console.log(myArray[-1]);  // undefined

myArray[-1] = 'd';         // implicitly convert -1 to '-1' then add a property
myArray['e'] = 5;          // add 'e' property
myArray[3] = 'f';          // add a new element to the end of the array

console.log(myArray[-1]);  // 'd'
console.log(myArray['e']); // 5
console.log(myArray);      // ['a', 'b', 'c', 'f', '-1': d, 'e': 5]
