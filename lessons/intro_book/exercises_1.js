(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

(!true || (!20 === 20) || (82 === 82)) || false;

(!true || false || true) || false;

true || false;

true;

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Input number isn\'t an integer');
    return;
  }
  else if (num % 2 === 0) {
    console.log('even');
  }  else {
    console.log('odd');
  }
}

if (foo()) {
  return 'bar';
} else {
  return qux();
}


function cap_ten(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

function log_range(n) {
  if (n < 0) {
    console.log(`${n} is less than 0`);
  } else if (n > 0 && n < 50) {
    console.log(`${n} is between 0 and 50`);
  } else if (n > 50 && n < 100) {
    console.log(`${n} is between 51 and 100`);
  } else if (n > 100) {
    console.log(`${n} is greater than 100`);
  }
}
