const db = require("../../database");

exports.getInvitationByIdClass = (classId) => db.execute(
    "SELECT * " 
    + "FROM invitations "
    + `WHERE class_id = '${classId}'`);


exports.getInvitationByCode = (code) => db.execute(
    "SELECT * " 
    + "FROM invitations "
    + `WHERE teacher_iCode = '${code}' OR student_iCode = '${code}'`);
    
exports.addInvitation = (invitation) => db.execute(
    `INSERT INTO invitations (class_id, teacher_iToken, student_iToken, teacher_iCode, student_iCode) 
     VALUES ('${invitation.class_id}', '${invitation.teacher_iToken}', '${invitation.student_iToken}', '${invitation.teacher_iCode}', '${invitation.student_iCode}')`);
