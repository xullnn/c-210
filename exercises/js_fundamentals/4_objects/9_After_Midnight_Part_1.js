// use date object's properties to substitude variables

const MILLISECONDS_PER_MIN = 60000;

function timeOfDay(deltaMinutes) {
  var midNight = new Date('2000-1-1 00:00');
  var realTime = new Date(midNight.getTime() + deltaMinutes * MILLISECONDS_PER_MIN);
  var hours = realTime.getHours();
  var minutes = realTime.getMinutes();

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
