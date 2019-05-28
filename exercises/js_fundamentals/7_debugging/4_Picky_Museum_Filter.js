function wantToVisit(museum, city) {
  return museum.includes('Computer')
  || museum.includes('Science')
  || museum.includes('Andy Warhol')
  || (museum.includes('Modern') && museum.includes('Art') && city === 'Amsterdam');
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);


// Wanted:

  // 1. about science / computer
  // 2. Andy Warhol
  // 3. modern art near Amsterdam

// 1 || 2 || 3
//
// museum.includes('Computer')
// || museum.includes('Science')
// || museum.includes('Andy Warhol')
// || (museum.includes('Modern') && (museum.includes('Art') && city === 'Amsterdam')
