const notificationModel = require('./notificationModel');

exports.getNoti = (userId, classesId) => notificationModel.getNotiByClass(userId, classesId);

exports.addNoti = (userId, classesId, content, target, time, link) => notificationModel.addNoti(userId, classesId, content, target, time, link);

exports.addNotiAll = (userId, classesId, content, time, link) => notificationModel.addNotiAll(userId, classesId, content, time, link);