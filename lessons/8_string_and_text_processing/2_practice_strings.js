var rlSync = require('readline-sync');
var answer = rlSync.question('What is your name? ');
var yell = answer.substr(-1) === '!';
var greetBase = `Hello ${answer.replace(/[^a-z]$/ig, '')}.`

if (yell) {
  console.log(`${greetBase.toUpperCase()} WHY ARE WE SCREAMING?`)
} else {
  console.log(greetBase);
}
