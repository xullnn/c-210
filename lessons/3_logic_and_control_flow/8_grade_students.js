// get scores from terminal
  // realine-sync
// calculate average score
// grading logic
  // check the highest
  // up to the lowest

rlSync = require('readline-sync');
var scores = [];
var score;
for(var i = 0; i < 3; i += 1) {
  score = parseInt(rlSync.question("Enter a score: ").trim());
  scores.push(score);
}
var average = (scores.reduce((acc, number) => acc + number, 0)) / 3

if (average >= 90) {
  console.log('A');
} else if (average >= 70) {
  console.log('B');
} else if (average >= 50) {
  console.log('C');
} else {
  console.log('F');
}
