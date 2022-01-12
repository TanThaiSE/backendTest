const db = require("../../database");

exports.addClassMember = (classId, memberId, roll) => db.execute(
    "INSERT INTO class_accounts (id_class, id_account, role) "
    + `VALUES ('${classId}', '${memberId}', '${roll}')`);

exports.getClasses = (idAcc, idClass) => db.execute(
    "SELECT *" 
    + " FROM class_accounts as A " + `WHERE A.id_account = '${idAcc}' and A.id_class = '${idClass}'`);