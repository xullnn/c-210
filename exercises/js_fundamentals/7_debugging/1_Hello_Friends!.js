// function randomGreeting() {
//   var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];
//
//   var idx = Math.floor(Math.random() * words.length);
//
//   words[idx];   // ?? lack of `return`
// }
//
// function greet() {
//   var names = Array.prototype.slice.call(arguments);
//   var i;
//
//   for (i = 0; i < names.length; i++) {
//     var name = names[i];
//     var greeting = randomGreeting;  // syntax error lack of `()`
//
//     console.log(greeting + ', ' + name + '!');
//   }
// }


function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  return words[idx];   // ?? lack of `return`
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting();  // syntax error lack of `()`

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
