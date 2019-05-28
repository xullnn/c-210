// count frequency of every char
// drop the ones which has a count less than 2

function repeatedCharacters(str) {
  var lowered = str.toLowerCase();
  var frequency = {};
  for(let i = 0; i < lowered.length; i += 1) {
    frequency[lowered[i]] ? frequency[lowered[i]] += 1 : frequency[lowered[i]] = 1;
  }
  for(property in frequency) {
    if (frequency[property] < 2) {
      delete frequency[property];
    }
  }

  return frequency;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
