// install realine-sync: npm i readline-sync
// initialize a variable (as 0) to keep track of the number of typing incorrect password
  // error_count

// form a loop
  // break loop if error_count >= 3(log message)
  // ask for inputing password
  // compare
    // correct
      // print out message
      // return
    // incorrect
      // error_count += 1
      // print a hint

rlSync = require('readline-sync');
var answer = '';

// for (var error_count = 0;;) {
//   if (error_count >= 3) {
//     console.log('You have been denied access.');
//     break;
//   }
//   answer = rlSync.question('What is the password:').trim();
//   if (answer === 'password') {
//     console.log('You have successfully logged in.');
//     break;
//   } else {
//     error_count += 1
//     console.log(`Wrong password, you have ${3 - error_count} times remained.`);
//   }
// }

var error_count = 0;
while (error_count < 3) {
    answer = rlSync.question('What is the password:').trim();
    if (answer === 'password') {
      console.log('You have successfully logged in.');
      break;
    } else {
      error_count += 1
      console.log(`Wrong password, you have ${3 - error_count} times remained.`);
    }
    if (error_count < 3) continue;
    console.log('You have been denied access.');
    break;

}
