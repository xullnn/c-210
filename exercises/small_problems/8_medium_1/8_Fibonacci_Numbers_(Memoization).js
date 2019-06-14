var cache = {
  1: 1,
  2: 1,
}

function fibonacci(n) {
  return cache[n] || (cache[n] = fibonacci(n - 2) + fibonacci(n - 1));
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
