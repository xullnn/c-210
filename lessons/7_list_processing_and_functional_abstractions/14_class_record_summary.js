// For single student:
// - (score = average of 4 exams times 0.65) + (sum of 5 exercises times 0.35)
// - iterate through `studentScores` to get grades of students (return a 5-element array)
//   - a function to calcuate average from an array of numbers
//   - a function to grade and transform number score to string grade
//
// For exams:
// - average
// - minimum
// - maximum
//
// - tranverse `studentScores` to get a nested array which contains all the information about one of the property
//   - [[50, 80, 60, 90], [50, 80, 60, 90] ...] or
//   - [[10, 0, 10, 10, 0], [10, 0, 10, 10, 0] ...
// - rotate exams to get data organized by each exam
//   - calcuate ave, min, max


var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


function averageOf(array) { // return average value of an array of numbers
  return Number((array.reduce((acc, e) => acc + e) / array.length).toFixed(1));
}

function calcuateScores(examScores, exercisesScores) { // return score for each student
  return examScores.map((examScore, index) => {
    return Math.round(
      averageOf(examScore) * 0.65 + exercisesScores[index].reduce((a, b) => a + b ) * 0.35
    )
  })
}

function getScores(scoreData, scoreType) { // return array
  let result = [];

  for(student in scoreData) {
    result.push(scoreData[student]['scores'][scoreType]);
  }

  return result;
}

function gradeScore(score) { // return string like '73(D)'
  let grade;

  if (score >= 93) grade = 'A'
  else if (score >= 85) grade = 'B'
  else if (score >= 77) grade = 'C'
  else if (score >= 69) grade = 'D'
  else if (score >= 60) grade = 'E'
  else grade = 'F'

  return `${score} (${grade})`;
}

function rotateData(scores) {
  return scores[0].map((_, index) => {
    return scores.map(scoresOfOne => scoresOfOne[index]);
  })
}

function generateClassRecordSummary(scores) {
  let examScores = getScores(studentScores, 'exams');
  let exercisesScores = getScores(studentScores, 'exercises');
  let examGrades = calcuateScores(examScores, exercisesScores).map(score => gradeScore(score));

  let examInfor = rotateData(examScores).map(exam => {
    return {
      average: averageOf(exam),
      minimum: Math.min(...exam),
      maximum: Math.max(...exam),
    }
  })

  return {
    studentGrades: examGrades,
    exams: examInfor,
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 }, // data for the four exams
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
