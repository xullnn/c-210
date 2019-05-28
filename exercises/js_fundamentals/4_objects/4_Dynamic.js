// var myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };
//
// var prop2 = '456';
// myObject['prop2'] = '456'; // update to prop2: '456'
// myObject[prop2] = '678';   // add a property '456': '678'
//
// console.log(myObject[prop2]); // myObject['456'] => '678'
// console.log(myObject.prop2);  // '456'
//
//
// // Further exploration
//
// var myObj = {};
// myObj[myFunc()] = 'hello, ';
//
// function myFunc() {  // 1 hoisted
//   return 'funcProp';
// }
//
// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

// become ---------------------------------
function myFunc() {           // 1 hoisted
  return 'funcProp';
}

var myObj;                    // 2 hoisted
myObj = {};

myObj[myFunc()] = 'hello, ';  // myObj['funcProp'] = 'hello, '
console.log(myObj);           // { 'funcProp': 'hello' }

myObj[myFunc()] = 'world!';   // myObj['funcProp'] = 'world'
console.log(myObj);           // { 'funcProp': 'world!' }
