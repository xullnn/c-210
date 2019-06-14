var numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var regex = new RegExp(`(${numStrings.join('|')})`, 'ig')

function wordToDigit(str) {
  return str.replace(regex, (match => numStrings.indexOf(match)));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
