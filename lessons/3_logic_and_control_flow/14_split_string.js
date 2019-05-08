// iterate through every char in string
  // - initialize a variable `word` as an empty string
  // - if current char is not euqal to dilimiter char
  //   - concatenate it into `word`
  // - else log out word; reset `word` to empty string

// possible edge cases
  // - no delimiter char given
  //   - test if delimiter is `undefined`
  // - delimiter is not shown in string
  //   - the algorithm can handle this
  // - delimiter appears at the start of end of the string
  //   - there will have an empty string be logged out(this behavior is similar to Ruby's `split` method)
  // - delimiter is an empty string
  //   - should split chars one by one
  //     - need a new conditional

// function argTest(a, b) {
//   console.log(a);
//   console.log(b); // undefined
// }
//
// argTest('hello');

function splitString(string, delimiter) {
  var word = '';
  if (delimiter === undefined) throw 'ERROR: No delimiter';
  for(var i = 0; i < string.length; i += 1) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(word);
      word = '';
    } else {
      word = word + string[i];
      if (i === (string.length - 1)) console.log(word);
    }
  }
}
console.log(splitString('abc,123,hello world', ','));
// console.log(splitString('hello'));
console.log(splitString('hello', ''));
console.log(splitString('hello', ';'));
console.log(splitString(';hello;', ';'));
