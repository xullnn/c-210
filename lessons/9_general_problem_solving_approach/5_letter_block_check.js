// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// Given a set of chars
  // no two chars should appear in a single block
  // 'BUTCH':
    // one of the char combinations ('UH') against the block H:U

// first find out all the two-char combinations from the given string
// check the combinations one by one
  // once there is a combination against the block return false
// return true

//   {
//   'BO': false;
//   'XK': false;
//   .
//   .
//   .
// }
// iterate through the given chars
  // for every char
    // iterate through the obj
      // if current char is included in the current key
        // if current key's value is true return false
        // if current key's value is false then set it to true
// return true

var blocks = "B:O   X:K   D:Q   C:P   N:A \
G:T   R:E   F:S   J:W   H:U \
V:I   L:Y   Z:M";

var blockStrs = blocks.match(/[A-Z]:[A-Z]/g).map(str => str[0] + str[2]);

var blockObjects = {}
blockStrs.forEach(key => blockObjects[key] = false);

console.log(blockObjects)

function isBlockWord(chars) {
  var blockObjects = {}
  blockStrs.forEach(key => blockObjects[key] = false);
  chars = chars.toUpperCase();

  for(let i = 0; i < chars.length; i += 1) {
    for(str in blockObjects) {
      if (str.includes(chars[i])) {
        if (blockObjects[str]) return false
        else blockObjects[str] = true
      }
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
