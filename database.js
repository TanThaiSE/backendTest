const db = require("./config")

// exports.connect = db.connect(function(err) {
//     if (err) { 
//         throw err;
//     } 
//     console.log("Database connected!");

//     var sql1 = "CREATE TABLE IF NOT EXISTS classes (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255));";
//     var sql2 = "CREATE TABLE IF NOT EXISTS accounts (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255));";
//     db.query(sql2, function (err, result) {
//         if (err) throw err;

//         console.log("Table created");
//     });
// });

exports.execute = (sql) => {
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }            
            resolve(result);
        });
    });
}