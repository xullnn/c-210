var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

//

function someFunction() {
  myVar = 'This is local';
}

var myVar = 'This is global';

someFunction();             // reassign `myVar`, because variable in the global scope can be accessed by an inner scope
console.log(myVar);         // 'This is global'
