// iterate from 1 to n
  // '*'.repeat(i).padStart(n)

function triangle(n) {
  for(var i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i).padStart(n));
  }
}

triangle(5);
triangle(9);
