const mysql = require("mysql");

const db = mysql.createPool({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "b3fdf8bb6c6230",
    password: "81b66be1",
    database: "heroku_41bc44bfe273b2f",
    port: "3306"
    // host: 'localhost',
    // user: 'root',
    // password: 'minh2401',
    // database: 'class_db'
})

module.exports = db;