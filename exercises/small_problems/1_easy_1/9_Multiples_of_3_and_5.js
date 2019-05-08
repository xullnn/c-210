// 1 to n

// iterate through 1 to n
  // increment if current number is divisible by 3 or 5

function multisum(n) {
  var sum = 0;

  for(var i = 1; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
