// Date

var today = new Date();

// Date.getDay();

console.log(`Today's day is ${today.getDay()}.`)

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var dayInWord = daysOfWeek[today.getDay()];

console.log(`Today's day is ${dayInWord}.`);

// Date.getDate();

// Today's date is Mon, the 6th

var date = today.getDate();

console.log(`Today's date is ${dayInWord}, the ${date}th`)

// date with correct suffix

// if last digit is 1 st
// if 2 nd
// if 3 rd
// otherwise th

function dateSuffix(dayNum) {
  var lastDigitStr = dayNum.toString()[dayNum.toString().length - 1];
  switch (lastDigitStr) {
    case '1': return `${dayNum}st`;
    case '2': return `${dayNum}nd`;
    case '3': return `${dayNum}rd`;
    default: return `${dayNum}th`;
  }
}

// dateObj.getMonth()

// Today's date is Mon, 11 6th

var month = today.getMonth();

console.log(`Today's date is ${dayInWord}, ${month + 1} ${dateSuffix(date)}.`)

// readable month

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today's date is ${dayInWord}, ${months[month]} ${dateSuffix(date)}.`)


// wrap up

function formattedMonth(month) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

function formattedDay(wDay) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[wDay];
}

function formattedDate(dateObj) {
  var date = dateObj.getDate();
  var formattedDate = dateSuffix(date);
  var month = formattedMonth(dateObj.getMonth());
  var day = formattedDay(dateObj.getDay());

  console.log(`Today is ${day}, ${month} ${formattedDate}`)
}

console.log(formattedDate(new Date()));

// notice deprecated methods

console.log(today.getFullYear());
console.log(today.getYear()); // deprecated

// getTime

console.log(today.getTime());


// setDate()

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));

// four ways to create date object in js
// - new Date() => current date
// - new Date(value) => specified date
// - new Date(dateString);
// - new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);

// next week

var nextWeek = new Date(today.getTime());
console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

// getHours and getMinutes
// get hour and min
// if hour or min < 10
  // concat '0' in front

function formatTime(dateObj) {
  var hours = dateObj.getHours();
  var mins = dateObj.getMinutes();
  if (hours < 10) {
    hours = '0' + hours.toString();
  } else if (mins < 10) {
    mins = '0' + mins.toString();
  }

  console.log(`${hours}:${mins}`);
}

console.log(formatTime(new Date()));
