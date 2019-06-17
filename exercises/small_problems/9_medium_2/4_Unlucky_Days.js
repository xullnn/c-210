// find the number of days in 12 months within a year
// - date is 13th and wday is friday
//
// create a Date object with the given year-1-13
// set count = 0
// iterate from 1 to 12
//   set month to current i
//   check if the day is friday, if true count += 1
// return count


function fridayThe13ths(year) {
  let count = 0;
  let dateObj = new Date(`${year}-1-13`);

  for(let i = 0; i <= 11; i += 1) {
    dateObj.setMonth(i)
    if (dateObj.getDay() === 5) count += 1
  }

  return count;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
