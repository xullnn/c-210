function substringsAtStart(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));
}

function substrings(str) {
  return str.split('').map((_, index) => substringsAtStart(str.slice(index))).flat();
}

function isPalindromic(str) {
  if (str.length === 1) return false;

  for(let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }

  return true;
}

function palindromes(str) {
  return substrings(str).filter(subStr => isPalindromic(subStr));
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
