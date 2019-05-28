// What is your age? 30
// At what age would you like to retire? 70
//
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

var rlSync = require('readline-sync');

var currentAge = parseInt(rlSync.question('What is your age? '));
var retireAge = parseInt(rlSync.question('At what age would you like to retire? '));

var workingDuration = retireAge - currentAge;
var currentYear = (new Date()).getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + workingDuration}.`);
console.log(`You have only ${workingDuration} years of work to go!`);
