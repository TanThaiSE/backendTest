const classMemberModel = require('./classMemberModel');

exports.addClassMember = (classId, memberId, roll) => classMemberModel.addClassMember(classId, memberId, roll);

exports.findOneAcc = async (idAcc, idClass) => {
    var accs = await classMemberModel.getClasses(idAcc, idClass);
    return accs;
}
