const MILLISECONDS_PER_MIN = 60000;
const MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  var after = new Date('2000-1-1 ' + timeStr);
  return (after.getHours() * 60 + after.getMinutes())
}

function beforeMidnight(timeStr) {
  if (afterMidnight(timeStr) % MINUTES_PER_DAY === 0) {
    return 0;
  }
  return (MINUTES_PER_DAY - afterMidnight(timeStr))
}
// afterMidnight
  // utilize `new Date(stringTime)`
    // new Date('2000-1-1 ' + timeStr);
    // getHour * 60 + getMinutes

// beforeMidnight
  // return 0 if minutes per day === afterMidnight(time)
  // minutes per day - afterMidnight(time)

  console.log(afterMidnight('00:00'));       // 0
  console.log(beforeMidnight('00:00'));      // 0
  console.log(afterMidnight('12:34'));       // 754
  console.log(beforeMidnight('12:34'));      // 686
