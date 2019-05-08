indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1
// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

// indexOf
// - basic idea: nested loop
    // - loop through chars in string |c|
    //   - for every iteration of |c|
    //     - loop through chars in subStr |sc|
    //       - if c !== sc skip current iteration
    //       - otherwise: check if all the remaining chars are matched too
    //         - comparison begins from
    //           - second char of subStr inner_i = 1
    //           - string[i + inner_i]
    //         - if any comparison missed, skip current iteration
    //         - else return i



function indexOf(string, subStr) {
  var c; // current char of string
  var sc;// current char of sub string
  for(var i = 0; i < string.length; i += 1) { // loop through string
    c = string[i];
    for(var ii = 0; ii < subStr.length; ii += 1) {
      sc = subStr[ii];
      if (c !== sc) continue;
      if (subStr.length === 1) return i;
      for(var iii = 1; iii < subStr.length; iii += 1) {
        if (string[i + iii] !== subStr[iii]) {
          break;
        } else {
          if (iii === (subStr.length - 1)) {
            return i;
          } else {
            continue;
          }
        }
      }
    }
  }
  return -1;
}


// lastIndexOf
  // similar process with indexOf, but
    // - iterate string inversely
    // - compare from the last char of subStr
    // - return value is length of string minus the index minus the length of subStr

    // 'Blue Whale, Whale Killer'
    // 12 = 24 - 7 - 5

function lastIndexOf(string, subStr) {
  var c;
  var sc;
  for(var i = (string.length - 1); i >= 0; i -= 1) {
    c = string[i];
    for(var ii = (subStr.length - 1); ii >= 0; ii -= 1) {
      sc = subStr[ii];
      if (c !== sc) continue;
      if (subStr.length === 1) return i;
      for (var iii = (subStr.length - 2); iii >= 0; iii -= 1) {
        if (subStr[iii] !== string[i - (subStr.length - iii - 1)]) {
          break;
        } else {
          if (iii === 0) {
            return (i - subStr.length + 1);
          } else {
            continue;
          }
        }
      }
    }
  }
  return -1;
}
