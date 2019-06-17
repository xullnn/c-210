// iterate through chars
  // record the number of uppercase chars and lowercase chars
  // length - (upper+lower) to get the number of non-alphebet chars
// calculate the percentage and return the object

function letterPercentages(str) {
  let upperCount = 0;
  let lowerCount = 0;
  let otherCount = 0;
  let width = str.length;

  str.split('').forEach(char => {
    upperCount += Number(/[A-Z]/.test(char));
    lowerCount += Number(/[a-z]/.test(char));
    otherCount += Number(/[^a-z]/i.test(char));
  })

  return {
    lowercase: (lowerCount / width * 100).toFixed(2),
    uppercase: (upperCount / width * 100).toFixed(2),
    neither: (otherCount / width * 100).toFixed(2),
  }
}


// use `match`

function letterPercentages(str) {
  let width = str.length;
  return {
    lowercase: ((str.match(/[a-z]/g) || []).length / width * 100).toFixed(2),
    uppercase: ((str.match(/[A-Z]/g) || []).length  / width * 100).toFixed(2),
    neither: ((str.match(/[^a-z]/ig) || []).length  / width * 100).toFixed(2),
  }
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
