const notificationService = require('./notificationService');
const classService = require('../classes/classService');
const accountService = require('../accounts/accountService');

exports.getNoti = async (req, res) => {
    const classesId = await classService.list(req.user.id);

    if (classesId.length > 0) {
        let listClass = "";
        classesId.forEach((element, index) => {
            if (index != 0) {
                listClass += ",";
            }
            listClass += element.id;
        });

        const notis = await notificationService.getNoti(req.user.id, listClass);

        if (notis) {
            res.status(200).json(notis);
        } else {
            res.status(404).json({message: 'No notifications available!'});
        }
    } else {
        res.status(404).json({message: 'No notifications available!'});
    }
}

exports.addNoti = async (type, userId, classId, target, link) => {
    let content;

    if (type == 0) {
        content = " has finalized a grade composition!";
    } else if (type == 1) {
        content = " replies to your grade review!";
    } else if (type == 2) {
        content = " has created a final decision on a mark review!";
    } else if (type == 3) {
        content = " requests a grade review!";
    } else {
        return;
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + " " + today.getDate() + '/' + (today.getMonth() + 1) + today.getFullYear();

    if (type == 1 || type == 2) {
        if (!target) {
            return;
        }

        const targetId = await accountService.getAccountIdbyStudentID(target);

        const notis = await notificationService.addNoti(userId, classId, content, targetId[0].id, time, link);

        if (notis) {
            return true;
        } else {
            return false;
        }
    }
    if (type == 3) {
        const TeachersId = await classService.listIdTeachers(classId);

        for (let i = 0; i < TeachersId.length; i ++) {
            const notis = await notificationService.addNoti(userId, classId, content, TeachersId[i].id_account, time, link);

            if (!notis) {
                return false;
            }
        }
    } else {
        const notis = await notificationService.addNotiAll(userId, classId, content, time, link);

        if (notis) {
            return true;
        } else {
            return false;
        }
    }
    
}