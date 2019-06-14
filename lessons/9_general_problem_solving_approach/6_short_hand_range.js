// The possible separators are: ["-", ":", ".."]
//
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// 2 types of separators
//   - comma => means discrete group
//     - '1,4,8,1' means '1,4,8,11'
//   - '-', ':', '..' => continuing range
//     - '1-5' means '1,2,3,4,5'
//     - '1-0' means '1,2,3,4,5,6,7,8,9,10'
//   - compound separators(group + range)
//     - '1,4,6-9' means '1,4,6,7,8,9'
//     - '1-3,2-3' means '1,2,3,12,13'

function parseRanges(numStr) {
  let ranges = numStr.split(', ');
  let lastMax = -Infinity;
  let numsInRange;
  let results = [];
  let rangePoints;

  numberGroups = ranges.map(rangeStr => {
    return rangeStr.split(/-|:|\.{2}/); // str numbers
  })

  numberGroups.forEach(numberGroup => {
    if (numberGroup.length === 1) {
      results.push(lastMax = convertNum(numberGroup[0], lastMax));
    } else {
      rangePoints = numberGroup.map(rangePoint => {
        return lastMax = convertNum(rangePoint, lastMax)
      })
       results.push(fillRangeGap(rangePoints));
    }
  })

  return results.reduce((a, b) => a.concat(b), []);
}

function fillRangeGap(rangePoints) {
  let results = [];
  for(let i = rangePoints[0]; i <= rangePoints[rangePoints.length - 1]; i += 1) {
    results.push(i);
  }

  return results;
}

function convertNum(numStr, lastMax) {
  let numOfDigits = numStr.length;
  let increStep = Math.pow(10, numOfDigits);
  let num = Number(numStr);
  while (num < lastMax) {
    num += increStep;
  }
  return num
}

// console.log(parseRanges("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
// console.log(parseRanges("1-3, 1-2")); // [1, 2, 3, 11, 12]
// console.log(parseRanges("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]
// console.log(parseRanges("104-2")); // [104, 105, ... 112]
// console.log(parseRanges("104-02")); // [104, 105, ... 202]
console.log(parseRanges("545, 64:11")); // [545, 564, 565, .. 611]
