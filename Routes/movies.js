const express = require('express');
const router = express.Router();
const mysql = require('../config');

//GET ALL MOVIES
router.get('/api/movies/all', (req, res) => {
    mysql.connection.query('SELECT * FROM movie', 
    (err, results, fields) =>{
        if(err){
            res.status(500).send('Error : ressource don\'t exist');
        }else{
            res.json(results);
        }
    });
});


//GET AN MOVIE
router.get('/api/movies/:id', (req, res) => {
    mysql.connection.query('SELECT * FROM movie WHERE id = ?',
    [req.params.id], 
    (err, results, fields) => {
        if(err){
            res.status(500).send(err);
        }else if(results.length === 0){
            res.status(404).send("Movie not found");
        }else{
            res.json(results);
        }
    });
});

//GET AN MOVIES WITH FILTER => RATING OR GENRE
router.get('/api/movies', (req, res) => {
    let sql = 'SELECT * FROM movie';
    const sqlValues = [];
    let queryNumber = 0;

    for(let i in req.query){
        queryNumber++;
    }

    if(queryNumber === 1 && req.query.hasOwnProperty('rating')){
        sql += ' WHERE rating = ?';
        sqlValues.push(req.query.rating);

    }else if(queryNumber === 1 && req.query.hasOwnProperty('genre')){
        sql += ' WHERE genre = ?';
        sqlValues.push(req.query.genre);

    }else if(queryNumber === 2){
        sql += ' WHERE genre = ? AND rating = ?';
        sqlValues.push(req.query.genre);
        sqlValues.push(req.query.rating);
    }

    mysql.connection.query(sql, sqlValues,
    (err, results, fields) => {
        if(err){
            res.status(500).send('Ressource non disponible');
        }else{
            res.status(200).send(results);
        }
    })
});

//GET AN MOVIES WITH FILTER => GENRE

router.get('/api/movies', (req, res) => {
    let sql = 'SELECT * FROM movie';
    const sqlValues = [];
    if(req.query.genre){
        sql += ' WHERE genre = ?';
        sqlValues.push(req.query.genre);
    }
    mysql.connection.query(sql, sqlValues,
    (err, results, fields) => {
        if(err){
            res.status(500).send('Ressource non disponible');
        }else{
            res.json(results);
        }
    });
});

module.exports = router;