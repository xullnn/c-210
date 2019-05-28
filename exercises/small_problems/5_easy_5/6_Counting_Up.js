function sequence(max) {
  let results = [];
  for(let i = 1; i <= max; i += 1) {
    results.push(i);
  }

  return results;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
