function one() {
  function log(result) {  // 1 defining function
    console.log(result);
  }

  function anotherOne() { // 2 defining function
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result); // result => 'to'
  }

  function anotherAnotherOne() {  // 3 defining function
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// the function one returns a function so the syntax one()() makes sense
// so we can split the execution into 2 steps
  // step 1: before one() returns `anotherOne`
  // step 2: call function `anotherOne` and pass in (77, 97, 116, 114, 105, 120, 33)

// anotherAnotherOne();
//   // Welcome
//   // to
// anotherOne(116, 104, 101);
//   // the
// return anotherOne(77, 97, 116, 114, 105, 120, 33);
//   // Matrix!
