function a() {
  var x = 'Hello'; // only function scope
}

a();

console.log(x);

// ----------------------------------------

function a() {
  x = 'Hello'; // global scope
}

a();

console.log(x);
