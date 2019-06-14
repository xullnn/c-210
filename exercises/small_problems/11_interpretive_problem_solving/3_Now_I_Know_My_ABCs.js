var str = "B:O   X:K   D:Q   C:P   N:A \
G:T   R:E   F:S   J:W   H:U \
V:I   L:Y   Z:M";

function parseBlocksObj() {
  let blockObject = {};
  let blocks = str.split(/\s+/).map(block => block[0] + block[2]);
  blocks.forEach(block => blockObject[block] = false);
  return blockObject;
}

// - transform the blocks
//   {
//     'BO': false,
//     'XY': false,
//     ...
//     'ZW': false,
//   }
//
// iterate through chars in argument
//   'BATCH'
//     - 'B' => go through all keys of object
//       - if the key(str) includes the current char, set its value to true
//       - if the value is already true, return false immediately
// return true;

function isBlockWord(chars) {
  let blockObj = parseBlocksObj();
  chars = chars.toUpperCase();

  for(let i = 0; i < chars.length; i += 1) {
    for(block in blockObj) {
      if (block.includes(chars[i])) {
        if (blockObj[block]) return false
        else blockObj[block] = true
      }
    }
  }

  return true;
}


isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false


// use regexp
function isBlockWord(chars) {
  let blocks = str.split(/\s+/).map(block => block[0] + block[2]);
  let blockRegexp = blocks.map(str => new RegExp(`[${str}]`, 'ig'));
  for(let i = 0; i < blockRegexp.length; i += 1) {
    if ((chars.match(blockRegexp[i]) || []).length === 2) return false;
  }

  return true;
}
