// similar logic to the previous one

function substringsAtStart(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));
}

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
