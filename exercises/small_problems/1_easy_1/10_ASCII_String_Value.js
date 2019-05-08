// initialize sum = 0
  // iterate through strings
    // concatenate every char's ascii number

function asciiValue(string) {
  var sum = 0;
  for(var i = 0; i < string.length; i += 1) {
    sum += string[i].charCodeAt();
  }

  return sum;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
