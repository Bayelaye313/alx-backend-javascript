/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Abdoulaye Gueye <https://github.com/Bayelaye313>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accStudent, curStudent) => (accStudent.id || accStudent) + curStudent.id,
      0,
    );
  }
  return 0;
}
