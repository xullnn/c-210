function acronym(string) {
  return string.split(/[^a-z]+/i).map(word => {
    return word[0].toUpperCase();
  }).join('')
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"

// split string by empty space
// map through words
  // return first char to upper case
// join back
