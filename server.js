const mysql = require('./config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const route_employee = require('./Routes/employee.js');
const route_movies = require('./Routes/movies.js');

app.use(bodyParser.json());




app.use('/', route_employee);
app.use('/', route_movies);



mysql.connection.connect((err) => {
    if(!err){
        console.log(`Connexion réussie à la base de donnée ${mysql.databaseName}`);
    }else{
        console.log(`Échec de la Connexion à la base de donnée ${mysql.databaseName} : ${err}`);
    }
});

app.listen(3000, () => {
    console.log('Le serveur écoute le port 3000');
})


