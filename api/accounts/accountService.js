const accountsModel = require('./accountModel');

exports.list = () => accountsModel.getAccounts();

exports.getInfoByUserId = (id) => accountsModel.getInfoByUserId(id);

exports.isTeacherOfCLass = (userId, classId) => accountsModel.isTeacherOfCLass(userId, classId);

exports.findAcc = async (username) => {
    var accs = await accountsModel.getAccounts();
    return accs.find(acc => acc.username == username);
}

exports.findAccWithMail = async (email) => {
    var accs = await accountsModel.getAccounts();
    return accs.find(acc => acc.email == email);
}

exports.updateInfoForOneField = async (field, infor, idObj) => {
    await accountsModel.updateInfoForOneField(field, infor, idObj);
}

exports.create = (accObj) => accountsModel.createAccount(accObj);

exports.checkExistedByStudentId = (studentId) => accountsModel.checkExistedByStudentId(studentId);

exports.updateInfo = (accObj) => accountsModel.updateInfo(accObj);

exports.getRole = (classId, userId) => accountsModel.getRole(classId, userId);
exports.remove = (userID) => accountsModel.remove(userID);
exports.lockAccount = async (userID) => {
    var getValue = await accountsModel.getBan(userID);
    var banValue = getValue[0].ban;

    if (banValue === 1) await accountsModel.updateInfoForOneField('ban', 0, userID);
    else await accountsModel.updateInfoForOneField('ban', 1, userID);
}

exports.adminAccount = () => accountsModel.getTypeAccounts('admin');
exports.userAccount = () => accountsModel.getTypeAccounts('user');

exports.createAdmin = (accObj) => accountsModel.createAdmin(accObj);
exports.unmap = (accountID) => accountsModel.updateInfoForOneField('studentID', '', accountID);
exports.mapping = async (accountID, studentID) => {
    const result = await accountsModel.checkExistedByStudentId(studentID);

    if (result.length === 0) {
        await accountsModel.updateInfoForOneField('studentID', studentID , accountID);
        return true;
    } else {
        return false
    }
}

exports.getStudentID = (idAcc) => {
    return accountsModel.getStudentID(idAcc);
}

exports.getAccountIdbyStudentID = (studentId) => accountsModel.getAccountIdbyStudentID(studentId);

exports.setMail = (userId, mail) => accountsModel.setMail(userId, mail);