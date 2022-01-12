const db = require("../../database");

exports.getListGrade = (classID) => db.execute(
    "SELECT D.fullname as name, B.grade, D.student_id , A.id as assignment_id " 
    +  ` FROM assignments as A  
    JOIN grades as B ON A.id = B.assignment_id 
    JOIN students as D ON B.student_id = D.student_id
    JOIN accounts as C ON C.studentID = B.student_id  WHERE A.class_id = '${classID}'`
)
exports.getListGradeOfStudentNotHaveAccount = (classID) => db.execute(
    "SELECT students.fullname as name, grades.grade, grades.student_id , grades.assignment_id" 
    +  ` FROM grades 
        JOIN students  ON grades.student_id = students.student_id`
    + ` WHERE grades.student_id not in ( SELECT B.student_id `
    + ` FROM assignments as A  
     JOIN grades as B ON A.id = B.assignment_id 
     JOIN accounts as C ON C.studentID = B.student_id  WHERE A.class_id = '${classID}')`
)
exports.getMembers = (classID) => db.execute(
    "SELECT S.fullname as name, S.student_id  as studentID "
    + "FROM students as S "
    // + " JOIN students as S ON S.student_id = acc.studentID "
    + `WHERE S.class_id = '${classID}'`
)

exports.getMembersHaveAccount = (classId) => db.execute(
    "SELECT acc.id, acc.studentID "
    + "FROM accounts as acc JOIN students as S "
    + "ON acc.studentID = S.student_id "
    + `WHERE  S.class_id = ${classId}`
); 
exports.getOneMember = (studentid) => db.execute(
    "SELECT name, studentID, phone, address "
    + "FROM accounts " 
    + ` WHERE studentID = '${studentid}'`
)

exports.getAssignmentGrades = (idAssign) => db.execute(
    `SELECT student_id, grade 
     FROM grades 
     WHERE assignment_id = '${idAssign}'`
);

exports.updateGrade= (gradeObj) => db.execute(
    `UPDATE grades
     SET grade ='${gradeObj.grade}'
     WHERE assignment_id = '${gradeObj.assignment_id}' and student_id = ${gradeObj.student_id}`
);

exports.addGrade = (gradeObj) => db.execute(
    `INSERT INTO grades (assignment_id, student_id, grade) 
    VALUES ('${gradeObj.assignment_id}', '${gradeObj.student_id}', '${gradeObj.grade}');`
);

exports.getListStudentGrades = (idAssign) => db.execute(
    `SELECT student_id
     FROM grades 
     WHERE assignment_id = '${idAssign}'`
);

exports.getGrade = (student_id, assignment_id) => db.execute(
    `SELECT grade
     FROM grades 
     WHERE assignment_id = '${assignment_id}' and student_id = '${student_id}'`
)