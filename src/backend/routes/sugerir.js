const express = require("express");
const db = require('../../utils/db');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router();


router.post('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "INSERT INTO Alteracao (ID_TABELA, NOME, DATA, CAMPO, ALTERACAO) VALUES ('" + req.body.ID_TABELA + "','" + req.body.NOME + "','" + req.body.DATA + "','" + req.body.CAMPO + "', '" + req.body.ALTERACAO + "')";
    console.log(sql);
    db.all(sql, [],  err => {
       if (err) {
             throw err;
       }
       db.close(); // Fecha o banco dentro do callback
       res.end();
    });
 });

 module.exports = router;