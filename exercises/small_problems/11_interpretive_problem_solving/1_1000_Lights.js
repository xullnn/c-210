// - all (n) lights are initially "off"
// - 1st: toggle all => 1 to n in terms of index
// - 2nd: toggle from the second one and add an interval of 2 => begin from 2 <= n
// - 3nd: toggle from the third one and add an interval of 3 => begin from 3 <= n
//
// input: number of lights => n; n is also the times of toggling round that will be performed
// output: an array of numbers which represent the lights which are "on"
//
// {
//   1: false,
//   2: false,
//   .
//   .
//   .
//   n: false,
// }
//
//
// 1: from 1 then +1 until (number of lights will be toggled) > n
// 2: from 2 then +2 until (number of lights will be toggled) > n
// 3:
// .
// .
// .
// n

// create an object to represent all lights
//   keys from 1 to n
//   values are initialized by false
// iterate from 1 2 3 to ... n => i
//   loop from ii = i, until ii > n, ii += i
//     locate the light by ii, then toggle it
// perform a filter operation to select all keys which have value of true
// return the array

function lightsOn(switches) {
  let lightsAndStates = {};
  for(let i = 1; i <= switches; i += 1) lightsAndStates[i] = false;

  for(let startNum = 1; startNum <= switches; startNum += 1) {
    for(let toggleNum = startNum; toggleNum <= switches; toggleNum += startNum) {
      lightsAndStates[toggleNum] = !lightsAndStates[toggleNum];
    }
  }

  return Object.keys(lightsAndStates).filter(key => lightsAndStates[key]).map(e => Number(e));
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
