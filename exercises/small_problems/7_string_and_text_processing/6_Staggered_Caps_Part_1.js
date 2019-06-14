  // split str into chars
  // let upcase = true;
  // map
    // return char if non-alphabetical
    // else if upcase is true, to uppercase
  // join

function staggeredCase(str) {
  let upcase = true;

  return str.split('').map(char => {
    letter = upcase ? char.toUpperCase() : char.toLowerCase();
    upcase = !upcase;
    return letter;
  }).join('')
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"
