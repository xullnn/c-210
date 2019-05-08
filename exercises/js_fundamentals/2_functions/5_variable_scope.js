function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// if we don't use keyword `var` to initialize a variale inside a inner scope
// we will end up initializing a global variale
// This is global
