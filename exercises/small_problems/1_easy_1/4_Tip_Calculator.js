// npm i readline-sync
var rlSync = require('readline-sync')

var bill = Number(rlSync.question('What is the bill? '));
var rate = Number(rlSync.question('What is the tip percentage? ')) / 100;

console.log(`The tip is $${bill * rate}`);
console.log(`The total is $${bill + bill * rate}`);
