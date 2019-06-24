// Patterns of templates
//   template1: The + adj(+) + noun + adv + verb
//            + the + adj(+) + noun
//            + comma(,)
//              + who + adverb + his + noun + and + verb phrase
//
//   template2: The + noun + verb + the + noun + `'s` + noun
//
//
// main nouns
//   - fox dog cat bird ...
//
// accessory nouns
//   - tail head ear eyes leg neck ...
//
//
// 'The'
// + random(main nouns)
// + random(verbs)
// + 'the'
// + random(main nouns)
// + `'s`
// + random(accessory nouns)

var template1 = ['The', 'mainNoun', 'verb', 'the', 'mainNoun', '\'s', 'accessoryNoun' ]
var template2 = ['The', 'adjective', 'mainNoun', 'adverb', 'verb', 'the', 'adjective', 'yellow', 'mainNoun', ',', 'who', 'adverb', 'verb', 'his', 'accessoryNoun', 'and looks around.' ]


var words = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  accessoryNoun: ['head', 'leg', 'tail'],
  mainNoun: ['fox', 'dog', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
}

// map through template
//   if the key exists then randomly choose a word from the value array
//   otherwise return the string itself
// join them back

function madlibs(template) {
  let sentence = template.map(key => {
    if (words[key]) {
      return random(words[key]);
    } else {
      return key;
    }
  }).join(' ')

  return normalizePunctuation(sentence)
}

function normalizePunctuation(string) {
  return string.replace(/\s([',\.!\?;:])/, '$1')
}

function random(array) {
  let index =  parseInt(Math.random() * (array.length));
  return array[index];
}

console.log(madlibs(template1));
console.log(madlibs(template2));
