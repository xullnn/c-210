function doubleConsonants(str) {
  let matches = [];
  for(let i = 0; i < str.length; i += 1) {
    if (/[a-z]/i.test(str[i]) && /[^aoeiu]/i.test(str[i])) {
      matches.push(`${str[i]}${str[i]}`);
    } else {
      matches.push(str[i]);
    }
  }

  return matches.join('')

}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


// https://www.regular-expressions.info/lookaround.html

function doubleConsonants(str) {
  return str.replace(/((?=[^aoeiu])[a-z])/ig, '$1$1')
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
