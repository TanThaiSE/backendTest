var mysql=require('mysql');
var connect =mysql.createConnection({
    host :'sql6.freemysqlhosting.net',
    user:'sql6464467',
    password:'tF8CnZ4j51',
    database:'sql6464467',
    connectionLimit:50

    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'classmanagement',
    // connectionLimit:50
})

module.exports=connect;