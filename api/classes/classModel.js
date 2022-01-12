const db = require("../../database");

exports.getClasses = () => db.execute(
    "SELECT *" 
    + "FROM classes");

exports.getClassesByUserId = (userId) => db.execute(
    `SELECT A.id, A.name, C.name as creator, A.description
        FROM classes as A 
            JOIN class_accounts as B ON A.id = B.id_class 
            JOIN accounts as C ON C.id = A.creator 
        WHERE B.id_account = '${userId}'`);

exports.getIdTeachersByClassId = (idClass) => db.execute(
    `SELECT id_account
        FROM class_accounts
        WHERE id_class = '${idClass}' AND role = 'teacher'`);
        
exports.getClassesIdByUserId = (userId) => db.execute(
    `SELECT A.id
        FROM classes as A 
            JOIN class_accounts as B ON A.id = B.id_class 
            JOIN accounts as C ON C.id = A.creator 
        WHERE B.id_account = '${userId}'`);

exports.addClass = (name, userId, description) => db.execute(
    "INSERT INTO classes (name, creator, description) "
    + `VALUES ('${name}', '${userId}', '${description}')`);

exports.getCreatorByClassId = (classId) => db.execute(
    "SELECT creator " 
    + "FROM classes "
    + `WHERE id = '${classId}'`);

exports.getMembersByClassId = (classId, role) => db.execute(
    "SELECT acc.id, acc.name "
    + "FROM accounts as acc JOIN class_accounts as ca "
    + "ON acc.id = ca.id_account "
    + `WHERE ca.role = '${role}' and ca.id_class = ${classId}`
);

exports.addStudent = (class_id, studentObj) => db.execute(
    `INSERT INTO students (student_id, class_id, fullname) 
    VALUES ('${studentObj.id}', '${class_id}', '${studentObj.name}');`
)

exports.deleteStudentsFromClass = (class_id) => db.execute(
    `DELETE FROM students 
    WHERE (class_id = '${class_id}');`
)