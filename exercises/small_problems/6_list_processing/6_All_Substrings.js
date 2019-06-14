// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

// for each starting letter
  // find all substrings:
    // ["a", "ab", "abc", "abcd", "abcde"]
    // ["b", "bc", "bcd", "bcde"]
    // pass in str.slice(0), str.slice(1) ... str.slice(last index)
// concat(reduce) them into one

function substringsAtStart(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));
}

// function substrings(str) {
//   return str.split('').map((_, index) => substringsAtStart(str.slice(index))).reduce((a, b) => a.concat(b));
// }

// flat
function substrings(str) {
  return str.split('').map((_, index) => substringsAtStart(str.slice(index))).flat();
}

substrings('abcde');
