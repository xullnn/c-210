function placeABet(guess) {
  (function generateRandomInt() {   // this is an expression not a declaration
    return Math.floor(Math.random() * 25) + 1;
  });

  var winningNumber = generateRandomInt(); // not defined

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));


// funtion declaration wrapped by parentheses is an expression
  // this kind of expression inside a function declaration is create an anonymous function
    // but even we give the function a name, we can only call it from inside the anonymous function
    // or invoke it immediately by writing a `()` right after the expression
  // so we can't invoke it elsewhere without knowing its name

// we can assign it to a variable named generateRandomInt then invoke it later

function placeABet(guess) {
  var generateRandomInt = (function generateRandomInt() {   // this is an expression not a declaration
    return Math.floor(Math.random() * 25) + 1;
  });

  var winningNumber = generateRandomInt(); // not defined

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));
