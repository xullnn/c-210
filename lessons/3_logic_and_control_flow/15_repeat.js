// check the validity of second argument
// do n times concatenation of first string

function repeat(string, times) {
  if (Number.isInteger(times) && times >= 0) {
    var new_str = '';
    for(var i = 1; i <= times; i += 1) {
      new_str = new_str + string;
    }
    return new_str;
  }
}
