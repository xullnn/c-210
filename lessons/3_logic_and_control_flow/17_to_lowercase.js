// initialize an empty string variable
// iterate through chars
  // if char is not an alphebetic char
    // leave it, concatnate it
  // else
    // convert it, concatnate it
// return new string
function toLowerCase(string) {
  var newStr = '';
  var upperAscii;
  for(var i = 0; i < string.length; i += 1) {
    if (/[A-Z]/.test(string[i])) {
      upperAscii = string[i].charCodeAt(0) + 32;
      newStr += String.fromCharCode(upperAscii)
    } else {
      newStr += string[i]
    }
  }
  return newStr;
}
