// let rlSync = require('readline-sync');
// let current_age = Number(rlSync.question("How old are you?"));
//
// let increment = 10
// console.log(`You are ${current_age} years old.`);
//
// console.log(`In ${increment} years, you will be ${current_age + increment} years old.`);
//
// increment = increment + 10
// console.log(`In ${increment} years, you will be ${current_age + increment} years old.`);
//
// increment = increment + 10
// console.log(`In ${increment} years, you will be ${current_age + increment} years old.`);
//
// increment = increment + 10
// console.log(`In ${increment} years, you will be ${current_age + increment} years old.`);


let rlSync = require('readline-sync');
let current_age = Number(rlSync.question("How old are you?"));
console.log(`You are ${current_age} years old.`);

for(let increment = 10; increment <= 40; increment += 10) {
  console.log(`In ${increment} years, you will be ${current_age + increment} years old.`);
}
