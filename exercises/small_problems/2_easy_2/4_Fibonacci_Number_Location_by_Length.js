// generate fibonacci number one at a time
// keep track of of index
  // if current fib's number of digits is n
    // stop generating

// how to generate fibonacci?
  // we need the first two
    // pre = 1, cur = 1
  // every iteration
    // next = pre + cur
    // pre = cur
    // cur = next



function findFibonacciIndexByLength(n) {
  var pre = 1;
  var cur = 1;
  var next;
  for(var i = 2; ;i += 1) {
    if (String(cur).length === n) {
      return i;
    } else {
      next = pre + cur;
      pre = cur;
      cur = next;
    }
  }
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);   //74
