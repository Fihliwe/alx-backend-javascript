/**
 *  returns an array of students for a sepcific city with their new grade
 * accepts students from getliststudents
 * city as a string
 * newGrades as an array of
 * @param { StudentId: 31, grade: 78, } newGrades
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
