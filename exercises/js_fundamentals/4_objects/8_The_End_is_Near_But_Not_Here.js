// function penultimate(string) {
//   return string.split(' ')[-2];
// }

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"


// in js, we can not retrieve elements from backwards by giving negative indexes

function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

// can also use slice
