var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  var thisSpecies = species[i];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log('Beware of the ' + newSpecies + '!');
  }
}

// for loop don't create new scope
// `var newSpecies` hoisted to the top of the global scope


var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  var newSpecies;
  var thisSpecies = species[i];

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log('Beware of the ' + newSpecies + '!');
  }
  newSpecies = undefined;
}
