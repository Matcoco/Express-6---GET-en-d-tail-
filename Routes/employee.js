const express = require('express');
const router = express.Router();
const mysql = require('../config');

//GET ALL employees
router.get('/employee/all', (req, res) => {
   mysql.connection.query('SELECT * FROM employee', 
   (err, results, fields) => {
       if(err){
           res.json(err);
       }else{
           res.json(results);
       }
   });
});

//GET an employee by id
router.get('/employee/:id', (req, res) => {
    mysql.connection.query('SELECT * FROM employee WHERE id = ?',
    [req.params.id],
    (err, results, fields) => {
        if(err){
            res.status(404).send(err);
        }else if(results.length === 0){
            res.status(404).send("La ressource n'existe pas")
        }else{
            res.json(results);
        }
    });
});

//POST an employee
router.post('/employee', (req, res) => {
    const FormData = req.body;
    mysql.connection.query('INSERT INTO employee SET ? ',[FormData], 
    (err, results, fields) => {
        if(err){
            res.status(500).send('Erreur d\'enregistrement');
        }else{
            res.send('enregistrement OK');
        }
    });
});

//Delete an employee by id
router.delete('/employee/:id', (req, res) => {
    const id = req.params.id;
    mysql.connection.query('SELECT * FROM employee WHERE id = ?', [req.params.id],
    (err, results, fields) => {
        const current_line = results;
        if(err){
            res.status(500).send(err);
        }else{
            mysql.connection.query('DELETE FROM employee WHERE id = ?', [id],
            (err,results, fields) => {
                if(err){
                    res.status(500).send(err);
                }else{
                    res.send(current_line);

                }
            });
        }
    });
});





module.exports = router;