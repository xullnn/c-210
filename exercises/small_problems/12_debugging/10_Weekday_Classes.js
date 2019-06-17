var TODAY = toDate("2018-08-05");

function toDate(string) {  // return Date object
  return new Date(string + "T00:00:00");
}

function paddingZero(num) {
  if (num < 10) return '0' + String(num)
  return String(num);
}

// function toString(date) {  // return str
//   return date.getFullYear() + "-"  // not getYear
//        + paddingZero(date.getMonth()) + "-"  // format of month and date are lacking leading 0
//        + paddingZero(date.getDay());  // getMonth return 0-11, getDay() gets 0-6
// }


function toString(date) {  // return str
  return date.getFullYear() + "-"  // not getYear
       + paddingZero(date.getMonth() + 1) + "-"  // format of month and date are lacking leading 0
       + paddingZero(date.getDate());  // getMonth return 0-11, getDay() gets 0-6
}

function isInThePast(date) {
  return date < TODAY; // dates in the past should be less than dates close to present
}


function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

var myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
}

var offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    var dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  var compatibleClasses = [];

  Object.keys(classes).forEach(function(className) {
    var classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return; // ????????
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
