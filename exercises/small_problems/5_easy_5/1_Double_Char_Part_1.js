function repeater(str) {
  return str.replace(/(.)/g, '$&$&');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
