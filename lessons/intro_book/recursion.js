function doubler(n) {
  console.log(`Current numebr: ${n}`);

  if (n <= 50) {
    doubler(n * 2)
  }
}

doubler(5)
