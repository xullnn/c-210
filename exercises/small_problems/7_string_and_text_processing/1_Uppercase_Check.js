// iterate through chars
// once encounter a non-uppercase char return false
// after iteration finished return true

function isUppercase(str) {
  for(let i = 0; i < str.length; i += 1) {
    if (str[i].toUpperCase() !== str[i]) return false;
  }

  return true;
}


isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


// this can't work since we can't return from forEach abstraction
  // function isUppercase(str) {
  //   str.split('').forEach(char => {
  //     if (char.toUpperCase() !== char) return false;
  //   })
  //   return true;
  // }

// use regex

// return !/[a-z]/.test(str)
