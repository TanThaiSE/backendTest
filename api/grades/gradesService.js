const gradesModel = require('./gradesModel');

exports.getListGrade = (classID) => {
    return gradesModel.getListGrade(classID);
}
exports.getListGradeOfStudentDontHaveAccount = (classID) => {
    return gradesModel.getListGradeOfStudentNotHaveAccount(classID);
}
exports.getMembers = (classID) => {
    return gradesModel.getMembers(classID);
}

exports.getMembersHaveAccount = (classId) => {
    return gradesModel.getMembersHaveAccount(classId);
} 
exports.getOneMember = (studentid) => {
    return gradesModel.getOneMember(studentid);
}

exports.getAssignmentGrades = (idAssign) => gradesModel.getAssignmentGrades(idAssign);

exports.updateGrade = (gradeObj) => gradesModel.updateGrade(gradeObj);

exports.addGrade = (gradeObj) => gradesModel.addGrade(gradeObj);

exports.getListStudentGrades = (idAssign) => gradesModel.getListStudentGrades(idAssign);

exports.getGrade = (student_id, assignment_id) => gradesModel.getGrade(student_id, assignment_id);