var firstName = 'Xu';
var lastName = 'llnn';

var fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

var language = 'Javascript';
var idx = language.indexOf('s');
console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';
console.log(a > b);

b = 'B';
console.log(a > b);

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';

var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

var boxNumber = 356..toString();
console.log(boxNumber);

var boxNumber2 = (356).toString();
console.log(boxNumber);

boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);
