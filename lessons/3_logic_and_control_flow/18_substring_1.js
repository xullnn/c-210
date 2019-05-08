// get n chars from the starting index

// convert starting index into valid number
// initialize an empty string as container
// initialize an counter to record how many chars has been kept
// iterate through string from starting, set count >= n as the termination conditon
  // if at any point `undefined` is returned(means the given index is out of range)
    // return new string

function substr(string, start, length) {
  var newStr = '';
  var counter = 0;
  if (start < 0) { var start = string.length + start }
  for(var i = start; counter < length; i += 1) {
    if (string[i] === undefined) {
      break;
    } else {
      newStr += string[i];
      counter += 1;
    }
  }
  return newStr;
}
