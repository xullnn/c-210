var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();


// we have a global variable `myVar`
// global variale can be accessed by inner scope
// so function can access it
// 'This is global'
