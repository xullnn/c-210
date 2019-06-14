// "WE ARE DISCOVERED FLEE AT ONCE"
//
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
//
// WECRLTE ERDSOEEFEAOC AIVDEN
//
//
// input:
//   - a string(message) need to be ciphered
//   - how many rails will be used
//
// output:
//   - the ciphered string(chars)


// Cipher message
function cipher(msg, nRails) { // return the ciphered string
  let railsConductor = periodConductorOf(msg, nRails)
  let rails = {};
  let chars = msg.replace(/[^a-z0-9]/ig, '').split('');

  for(let i = 0; i < nRails; i += 1) rails[i] = [];

  chars.forEach(char => rails[railsConductor.shift()].push(char));

  return Object.values(rails).reduce((a, b) => a.concat(b), []).join('');
}

function periodConductorOf(msg, nRails) { // return an array of numbers [0,1,2,1] or [0,1,2,3,2,1]
  let period = [];
  let conductor = [];

  for(let i = 0; i < nRails - 1; i += 1) period.push(i);
  for(let i = nRails - 1; i >= 1; i -= 1) period.push(i);

  let periodAmount = Math.ceil(msg.length / period.length);

  for(let i = 1; i <= periodAmount; i += 1) {
    conductor.push(period);
  }

  return conductor.flat();
}


var msg = "WE ARE DISCOVERED FLEE AT ONCE";
var nRails = 3;
// console.log(periodConductorOf(msg, nRails));
console.log(cipher(msg, nRails));
// WECRLTEERDSOEEFEAOCAIVDEN => ouput
// WECRLTEERDSOEEFEAOCAIVDEN // intended

// ----------------------------------------------------------------------------

// decipher

// input:
//   - ciphered message(string)
//   - number of rails
//
// output:
//   - plain text(string)

var cipheredMsg = "WECRLTEERDSOEEFEAOCAIVDEN";

function decipher(cipheredMsg, nRails) {
  let railsConductor = periodConductorOf(msg, nRails);
  let railsIndexes = {};

  for(let i = 0; i < nRails; i += 1) railsIndexes[i] = [];

  for(let i = 0; i < cipheredMsg.length; i += 1) railsIndexes[railsConductor.shift()].push(i);

  let charIndexes = Object.values(railsIndexes).reduce((a, b) => a.concat(b), []).flat();

  let chars = [];

  charIndexes.forEach((cipheredIndex, charIndex) => chars[cipheredIndex] = cipheredMsg[charIndex]);

  return chars.join('');
}

console.log(decipher(cipheredMsg, nRails));
