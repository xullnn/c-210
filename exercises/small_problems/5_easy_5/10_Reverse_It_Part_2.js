function reverseWords(str) {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word
    }
  }).join(' ')

}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');

// return word.length >= 5 ? word.split('').reverse().join('') : word
