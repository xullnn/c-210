var rlSync = require('readline-sync');

var str = rlSync.question("Please enter a phrase: ");
// console.log(str.length);

// ignore spaces
console.log(str.replace(/\s/g, '').length);
