function calculateAverage(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

const student = [];

for (let i = 1; i <= 5; i++) {
  const student_name = prompt(`Enter name of student ${i}:`);
  const enabling_assessment = [];
  for (let j = 1; j <= 5; j++) {
    const grade = parseInt(prompt(`Enter Enabling Assessment ${j} for ${student_name}:`));
    enabling_assessment.push(grade);
  }
  const summative_assessment = [];
  for (let j = 1; j <= 3; j++) {
    const grade = parseInt(prompt(`Enter Summative Assessment ${j} for ${student_name}:`));
    summative_assessment.push(grade);
  }
  const final_exam = parseInt(prompt(`Enter Final Exam grade for ${student_name}:`));
  student.push({
    student_name,
    enabling_assessment,
    summative_assessment,
    final_exam,
  });
}

student.forEach((student) => {
  const enabling_assessmentAverage = calculateAverage(student.enabling_assessment);
  const summative_assessmentAverage = calculateAverage(student.summative_assessment);
  const class_participation = enabling_assessmentAverage * 0.3;
  const summative_grade = summative_assessmentAverage * 0.3;
  const final_examGrade = student.final_exam * 0.4;
  const grade = class_participation + summative_grade + final_examGrade;
  let final_grade;
  if (grade >= 90) {
    final_grade = "A";
  } else if (grade >= 80) {
    final_grade = "B";
  } else if (grade >= 70) {
    final_grade = "C";
  } else if (grade >= 60) {
    final_grade = "D";
  } else {
    final_grade = "F";
  }
  student.class_participation = class_participation.toFixed(2);
  student.summative_grade = summative_grade.toFixed(2);
  student.grade = grade.toFixed(2);
  student.final_grade = final_grade;
});

console.table(student, ["student_name", "class_participation", "summative_grade", "grade", "final_grade"]);
