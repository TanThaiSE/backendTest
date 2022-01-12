const db = require("../../database");

exports.getAssignment = (classID) => db.execute(
    "SELECT * " 
    + `FROM assignments WHERE class_id = '${classID}' ORDER BY rank`);
    

exports.getAssignById = (idAssign) => db.execute(
    "SELECT * " 
    + "FROM assignments "
    + `WHERE id = '${idAssign}'`);

exports.createAssignment = (assignObj) => db.execute(
    `INSERT INTO assignments (class_id, topic, description, creator, deadline, grade, rank)  
     VALUES ('${assignObj.idClass}', '${assignObj.topic}', '${assignObj.description}', 
            '${assignObj.creator}', '${assignObj.deadline}', '${assignObj.grade}', '${assignObj.rank}')`);

exports.deleteAssignment = (idAssign) => db.execute(
    `DELETE FROM assignments 
     WHERE id = '${idAssign}'`);

exports.updateAssignment = (assignObj) => db.execute(
    `UPDATE assignments 
    SET topic = '${assignObj.topic}', 
        description = '${assignObj.description}', 
        deadline = '${assignObj.deadline}', 
        grade = '${assignObj.grade}' 
    WHERE (id = '${assignObj.id}');`
);

exports.updateRank = (listAssign) => {
    for (let i = 0; i < listAssign.length; i++) {
        var result = db.execute(`UPDATE assignments 
            SET rank = '${i + 1}' 
            WHERE (id = '${listAssign[i].id}'); `);
        if (!result) {
            return false;
        }
    }
    return true;
}

exports.markFinal = (idAssign) => db.execute(
    `UPDATE assignments 
    SET finished = 1  
    WHERE id = '${idAssign}';`
);