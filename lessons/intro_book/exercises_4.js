let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function logMatch(words) {
  words.forEach((word) => {
    if (/lab/.test(word)) {
      console.log(word);
    };
  });
};

logMatch(words, /lab/);
