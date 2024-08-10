class Controller {
  constructor(entidadeService) {
    this.next = null;
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

  async update(req, res, next) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const isUpdated = await this.entidadeService.updateRegistro(dadosAtualizados, Number(id));
      if(!isUpdated) {
        //
      }
      console.log('teste');
      return res.status(200).json({mensagem: 'registro atualizado com sucesso!'});
    } catch (error) {
      next('Erro: Registro não foi atualizado', 400);
    }
  }

  async getById(req, res, next){
    const { id } = req.params;
    try {
      const registro = await this.entidadeService.getRegistroById(Number(id));
      return res.status(200).json(registro);
    } catch (error) {
      next('Erro: Não foi possível encontrar o registro', 400);
    }
  }

  async create(req, res, next){
    const dadosRegistro = req.body;
    try{
      const novoRegistro = await this.entidadeService.createRegistro(dadosRegistro);
      return res.status(200).json(novoRegistro);
    }catch (error) {
      next('Nao foi possivel criar um novo registro', 400);
    }
  }

  async delete(req, res, next){
    const { id } = req.params;
    try {
      await this.entidadeService.deleteRegistro(Number(id));
      return res.status(200).json({mensagem: `Id ${id} deletado`});
    } catch (error) {
      next(`Não foi possível deletar o registro ${id}`);
    }

  }
}

module.exports = Controller;