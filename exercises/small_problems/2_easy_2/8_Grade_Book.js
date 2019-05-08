function getGrade(x, y, z) {
  var mean = (x + y + z) / 3;
  if (mean <= 100 && mean >= 90) {
    return 'A';
  } else if (mean >= 80) {
    return 'B';
  } else if (mean >= 70) {
    return 'C';
  } else if (mean >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
