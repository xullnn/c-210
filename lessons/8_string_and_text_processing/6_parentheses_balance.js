isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

function isBalanced(str) {
  let balance = 0;

  for(let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      balance += 1;
    } else if (str[i] === ')') {
      balance -= 1;
    }

    if (balance < 0) return false;
  }

  return balance === 0;
}

// iterate through string
// ( + 1
// ) - 1
  // once sum < 0 return false
// is sum != 0 return false
