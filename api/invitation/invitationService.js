const invitationModel = require('./invitationModel');

exports.getInvitationByIdClass = (classId) => invitationModel.getInvitationByIdClass(classId);

exports.getInvitationByCode = (classId) => invitationModel.getInvitationByCode(classId);

exports.addInvitation = (invitation) => invitationModel.addInvitation(invitation);

exports.getCodeFromToken = (role) => {
    const now = Date.now(); 

    let cur = now;
    let token = "";

    while (cur !== 0){
        let temp = cur % 10;
        token += String.fromCharCode(temp + 65);
        cur = Math.floor(cur/10);
    }

    while (token.length < 13) {
        token += "A";
    }

    if (role == 'teacher') {
        let Str = role.toUpperCase();
        for (let i = 0; i < Str.length; i++) {
            let rand = Math.floor(Math.random() * 13);
            token = token.slice(0, rand) + Str[i] + token.slice(rand);
        } 
    } else {
        let Str = role.toUpperCase();
        for (let i = 0; i < Str.length; i++) {
            let rand = Math.floor(Math.random() * 13);
            token = token.slice(0, rand) + Str[i] + token.slice(rand);
        } 
    }

    return token;
}

exports.getVerifyCode = () => {
    const now = Date.now(); 

    let cur = now;
    let token = "";

    while (cur !== 0){
        let temp = cur % 10;
        token += String.fromCharCode(temp + 65);
        cur = Math.floor(cur/10);
    }

    return token;
}