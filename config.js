const mysql = require('mysql');
let databaseName = 'company';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'A112233a',
    database:databaseName
});

module.exports = {
    "connection":connection,
    "databaseName":databaseName
}


