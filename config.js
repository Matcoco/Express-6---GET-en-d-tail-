const mysql = require('mysql');
let databaseName = 'company';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'******', // INSERER VOTRE MOT DE PASSE MYSQL
    database:databaseName
});

module.exports = {
    "connection":connection,
    "databaseName":databaseName
}


