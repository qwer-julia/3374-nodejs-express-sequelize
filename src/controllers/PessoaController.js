const database = require('../models');

class PessoaController {
  static async getAll(req, res, next){
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    }    catch (erro) {
      next(erro);
    }
  }
}

module.exports = PessoaController;