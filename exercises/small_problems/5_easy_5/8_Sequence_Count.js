function sequence(times, start) {
  let results = [];
  
  for(let i = 1; i <= times; i += 1) {
    results.push(start * i);
  }

  return results;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
