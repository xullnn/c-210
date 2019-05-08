var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Functions get processed first so

function someFunction() {
  var myVar = 'This is local'; // initialize a new variale local to function definition body
}                              // till the function is called

var myVar = 'This is global';  // initialize a new variale global to top level

someFunction();                // call function, `var myVar = 'This is local';` has a scope local to the function definition body
                               // so this has nothing to do with the top level `myVar`
console.log(myVar);            // 'This is global'
