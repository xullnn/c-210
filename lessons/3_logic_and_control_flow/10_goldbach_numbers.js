// https://en.wikipedia.org/wiki/Goldbach%27s_conjecture

// Every even integer greater than 2 can be expressed as the sum of two primes.
checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53


// find all primes that are less than or equal to n / 2

// iterate through all found primes
// another number = (n - prime)
  // if another number is a prime too
    // then they form a pair

function isPrime(number) {
  if (number < 2) return false;
  for(var i = (number - 1); i > 1; i -= 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function primes_in_half(num) {
  var result = [];
  for(var i = 2; i <= Math.floor(num / 2); i += 1) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}

function checkGoldbach(num) {
  if (num % 2 === 1) {
    console.log(null);
    return
  }
  var half_primes = primes_in_half(num);
  var right;
  half_primes.forEach(function(left) {
    right = num - left;
    if (isPrime(num - left)) console.log(`${left} ${right}`);
  })
}
