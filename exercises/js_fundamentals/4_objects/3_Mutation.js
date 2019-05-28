var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// if (array1[i].startsWith('C')) {            if one element starts with uppercase 'C'
//   array1[i] = array1[i].toUpperCase();      replace that element with a new upcased element
// }

// in second for loop we are using new string to replace certain ones in array1
// since string(primitive type) is immutable in Js, so elements in array2 won't be affected
// it will log ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];

// Further Exploration
// What would happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object literal in array1 be reflected in array2?
// How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?

// 1 yes, objects are mutable in js
// 2 if we do array2 = array1 then the changes will be linked
