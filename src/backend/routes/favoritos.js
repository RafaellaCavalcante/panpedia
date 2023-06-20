//Criar 3 endpoints
const express = require("express");
const db = require('../../utils/db');
const parse = require("nodemon/lib/cli/parse");

const router = express.Router();

var table;

router.get("/:permissao/favoritos/:limit", (req, res) => {
   let params;
   let limit = `limit ${parseInt(req.params.limit) * 10},10`
   let query = `LEFT JOIN Catalogo_Dados_Tabelas WHERE Favoritos.ID_TABELA = Catalogo_Dados_Tabelas.ID_DADOS_TABELAS ${limit}`;

   const sql = "SELECT * FROM Favoritos " + query;

   db.all(sql, params, (err, rows) => {
      if (err) {
         console.error(err.message);
         res.send("Erro: " + err.message);
         return;
      }
      if(rows == null){
         
      res.render("frontend/favoritos/favoritos");
      }
      res.render("frontend/favoritos/favoritos", {limit: req.params.limit, permissao: req.params.permissao, model: rows, next: `/favoritos/${(req.params.permissao)}/favoritos/${parseInt(req.params.limit) + 1}`, prev: `/favoritos/${(req.params.permissao)}/favoritos/${parseInt(req.params.limit) - 1}`});
});})







//Fim do arquivo
module.exports = router;