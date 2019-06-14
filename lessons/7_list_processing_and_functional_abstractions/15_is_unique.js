function isAllUnique(string) {
  let strippedStr = string.replace(/\s+/g, '').toLowerCase();
  let isAppeared = {};

  for(let i = 0; i < strippedStr.length; i += 1) {
    if (isAppeared[strippedStr[i]]) {
      return false;
    } else {
      isAppeared[strippedStr[i]] = true;
    }
  }

  return true;
}

isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true
