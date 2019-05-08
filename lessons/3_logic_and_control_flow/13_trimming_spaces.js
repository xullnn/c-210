// find the starting index(the index of the first non-space letter)
// find the ending index
// iterate throught the string from the starting index, concatenating chars until the ending index

function starting_index_of(string) {
  for(var i = 0; i < string.length; i += 1) {
    if(string[i] !== ' ') return i;
  }
}

// console.log(starting_index_of('   a')); // 3
// console.log(starting_index_of('  a b cde')); // 2

function ending_index_of(string) {
  for(var i = (string.length - 1); i >= 0; i -= 1) {
    if(string[i] !== ' ') return i;
  }
}

console.log(ending_index_of('  abc d  ')); // 6
console.log(ending_index_of('abc d')); // 4

function trim(string) {
  var sIndex = starting_index_of(string);
  var eIndex = ending_index_of(string);
  var new_str = '';
  for(var i = sIndex; i <= eIndex; i += 1) {
    new_str = new_str + string[i]
  }
  return new_str
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
