function staggeredCase(str) {
  let upcase = true;

  return str.split('').map(char => {
    letter = upcase ? char.toUpperCase() : char.toLowerCase();
    if (/[a-z]/i.test(char)) upcase = !upcase;
    return letter;
  }).join('')
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
