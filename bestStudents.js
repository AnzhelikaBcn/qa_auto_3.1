function findTopStudents(students) {
  let maxScore = 0;
  let topStudents = [];
  let zeroScoreWarning = false;

  students.forEach(student => {
    if (student.score > maxScore) {
      maxScore = student.score;
      topStudents = [student.name];
      zeroScoreWarning = false;
    } else if (student.score === maxScore) {
      topStudents.push(student.name);
    } else if (student.score === 0) {
      zeroScoreWarning = true;
    }
  });

  return { successfulStudents: topStudents, zeroScoreWarning };
}

module.exports = findTopStudents;