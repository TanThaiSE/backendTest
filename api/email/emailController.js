const emailService = require('./emailService');
const invitationService = require('../invitation/invitationService');
const Authorization = require('../../modules/authorization');
const accountService = require('../accounts/accountService');

exports.sendEmail = async (req, res) => {
    const recipient = req.body.recipient;
    const inviteLink = req.body.inviteLink;
    const role = req.body.role;
    const classId = req.body.classId;

    const isTeacher = await Authorization.teacherAuthority(req.user.id, classId);
    if (!isTeacher){
        res.status(404).json({message: "Authorization Secure Error!"});
    }

    const result = await emailService.sendEmail(recipient, inviteLink, role);
    
    if (result) {
        res.status(202).json({message: 'Email sent!'});
    }
    else {
        res.status(404).json({message: "Error!"});
    }
};

exports.getVerifyCode = async (req, res) => {
    const mail = req.body.mail;
    const code = invitationService.getVerifyCode();

    const result = await emailService.sendVerifyEmail(mail, code);

    if (result) {
        res.status(202).json(code);
    }
    else {
        res.status(404).json({message: "Error!"});
    }
};

exports.setMail = async (req, res) => {
    const mail = req.body.mail;
    const userId = req.user.id;

    const result = await accountService.setMail(userId, mail);

    if (result) {
        res.status(202).json({message: "Set mail success"});
    }
    else {
        res.status(404).json({message: "Error!"});
    }
};