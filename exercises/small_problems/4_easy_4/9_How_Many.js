function countOccurrences(elements) {
  let counts = {};

  elements.forEach(e => {
    counts[e] = counts[e] || 0;
    counts[e] += 1;
  })

  for(let [key, value] of Object.entries(counts)) {
    console.log(`${key} => ${value}`);
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// // console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
