function reverse(string) {
  let reversed = '';

  for(let i = 0; i < string.length; i += 1) {
    reversed = string[i] + reversed;
  }

  return reversed;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"

// initialize an empty str
// iterate through chars
  // str = currentChar + str
// return str
