const db = require("../../database");

exports.getNotiByClass = (idAcc, idClass) => db.execute(
    "SELECT A.id as id, A.id_class as id_class, "
    + "     B.name as name, "
    + "     A.content as content, "
    + "     A.time as time, "
    + "     A.link as link "
    + " FROM notifications as A"
    + " JOIN accounts as B ON B.id = A.creator " 
    + ` WHERE A.creator != '${idAcc}' 
            AND ((A.forAll) OR (NOT A.forAll AND A.id_class IN (${idClass})))` );

exports.addNoti = (userId, classesId, content, target, time, link) => db.execute(
    `INSERT INTO notifications (id_class, creator, content, forAll, target, time, link) 
    VALUES ('${classesId}', '${userId}', '${content}', FALSE, '${target}', '${time}', '${link}')`
);

exports.addNotiAll = (userId, classesId, content, time, link) => db.execute(
    `INSERT INTO notifications (id_class, creator, content, forAll, time, link) 
    VALUES ('${classesId}', '${userId}', '${content}', TRUE, ${time}, ${link})`
);