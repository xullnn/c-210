var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// b[2] += 7;
// a[2] += 7;
// a[2] = 10
// a => [1,2,10]
