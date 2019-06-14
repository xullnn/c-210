function fibonacci(n) {
  let pre = 1;
  let current = 1;

  if (n <= 2) return current;
  for(let i = 3; i <= n; i += 1) {
    next = pre + current;
    pre = current;
    current = next;
  }

  return current;
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
