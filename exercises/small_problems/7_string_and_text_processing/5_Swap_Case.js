var ruleObject = {
  '[a-z]': char => char.toUpperCase(),
  '[A-Z]': char => char.toLowerCase(),
}

function swapCase(str) {
  return str.split('').map(char => {

    for(regex in ruleObject) {
      if (new RegExp(regex).test(char)) return ruleObject[regex](char);
    }

    return char;

  }).join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// https://stackoverflow.com/questions/6142922/replace-a-regex-capture-group-with-uppercase-in-javascript

function swapCase(str) {
  return str.split('').map(char => {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  }).join('');
}
