var rlSync = require('readline-sync');
var questions = [
  'Enter a noun: ',
  'Enter a verb: ',
  'Enter an adjective: ',
  'Enter an adverb: '
];

var answers = questions.map(function(query) {
  return rlSync.question(query)
})

console.log(`Do you ${answers[1]} your ${answers[2]} ${answers[0]} ${answers[3]}\
? That's hilarious!`)
