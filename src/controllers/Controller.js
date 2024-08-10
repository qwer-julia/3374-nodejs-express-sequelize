class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res, next){
    try{
      const listaDeRegistros = await this.entidadeService.getAllRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch(error) {
      next(error);
    }
  }
}

module.exports = Controller;