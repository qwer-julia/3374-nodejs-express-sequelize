const BaseError  = require('../errors/BaseError.js');

function errorHandler(erro, req, res, next) {
  new BaseError().enviarResposta(res);
}

module.exports = errorHandler;