var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

function objectHasProperty(obj, property_name) {
  for(var p in obj) {
    if (p === property_name) return true;
  }
  return false;
}

// given solution

function objectHasProperty(obj, property_name) {
  var keys = Object.keys(obj);
  return keys.indexOf(property_name) !== -1;
}
//

function incrementProperty(obj, str) {
  if (Object.keys(obj).includes(str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }

  return obj[str];
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;

//

function copyProperties(obj1, obj2) {
  for(let prop in obj1) {
    obj2[prop] = obj1[prop];
  }
  return Object.keys(obj2).length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
copyProperties(hal, sal);  // 2
sal;

//

function wordCount(str) {
  var obj = {};
  var words = str.split(' ');
  
  words.forEach(function(word) {
    if (obj[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  })

  return obj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
