const express = require('express');
// não estou utilizando import export foi algumas ferramentas do Sequelize funcionam melhor com o CommonJs

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;
