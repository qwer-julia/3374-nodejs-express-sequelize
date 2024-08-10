// não estou utilizando import export foi algumas ferramentas do Sequelize funcionam melhor com o CommonJs
const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

module.exports = app;
