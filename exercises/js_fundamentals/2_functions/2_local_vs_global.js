var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// we initialize a variale `myVar` inside function
// so it has a scope local to the function definition body
// then we immediately log out the variale
// through out the process, the top level `myVar` never touched the variale inside the function
// 'This is local'
