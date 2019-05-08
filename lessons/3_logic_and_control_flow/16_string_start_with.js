// if searchString is empty string
  // return true
// else
  // iterate through searchString
    // check if curent char and the char in first string's same index is the same
    // once encounter a different one return false
// return true

function startsWith(string, searchString) {
  if (searchString === '') {
    return true
  } else {
    for(var i = 0; i < searchString.length; i += 1) {
      if (searchString[i] !== string[i]) return false;
    }
  }
  return true;
}
