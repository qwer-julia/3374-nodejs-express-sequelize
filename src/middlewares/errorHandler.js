const BaseError  = require('../errors/BaseError.js');

function errorHandler(erro, req, res, next) {
  console.log(erro);
  new BaseError(erro).enviarResposta(res);
}

module.exports = errorHandler;