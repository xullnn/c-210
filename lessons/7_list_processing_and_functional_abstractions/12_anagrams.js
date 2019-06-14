function anagram(word, list) {
  let criterionCount = countOccurences(word);
  let currentCount;

  return list.filter(e => {
    currentCount = countOccurences(e);
    return isSame(criterionCount, currentCount)
  })
}

function countOccurences(word) {
  let count = {};

  for(let i = 0; i < word.length; i += 1) {
    if (count[word[i]] === undefined) {
      count[word[i]] = 1;
    } else {
      count[word[i]] += 1;
    }
  }

  return count;
}

function isSame(count1, count2) {
  if (Object.keys(count1).length !== Object.keys(count2).length) return false;

  for(key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}


anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]


// count number of occurences for every letter in criterion word
  // {a: 1, c: 4 ...}
// use `fitler` on the words array
  // if lengths are different return false
  // determine whether they are anagram:
    // return true if they have same key/value pairs

// build function to count letter occurences of a word
// build a function to determine whether two objects have same key value pairs
