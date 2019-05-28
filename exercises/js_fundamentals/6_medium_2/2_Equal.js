var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// `===` triple equal operater compares operands in object level, means operands
// have to be the same object to return true
