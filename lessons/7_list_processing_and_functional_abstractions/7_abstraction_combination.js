var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

// find the mostly occured first letter

// slice first letter for every word
// count the number of occurences for each letter(reduce, pass in empty obj)
// iterate through object, reduce to find the max one

let findOccurence = (acc, current) => {
  if (acc[current] === undefined) {
    acc[current] = 1;
  } else {
    acc[current] += 1;
  }
  return acc;
}



let ocurrences = names.map(e => e[0]).reduce(findOccurence, {});
let max;

Object.keys(ocurrences).reduce(function(current, next) {
  return ocurrences[current] < ocurrences[next] ? next : current;
})
