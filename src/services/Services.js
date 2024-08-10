const dataSource = require('../models');

class Services {
  constructor(nomeDoModel){
    this.model = nomeDoModel;
  }

  async getAllRegistros() {
    return dataSource[this.model].findAll();
  }

  async updateRegistro(dadosAtualizados, id){
    const listaDeRgristroAtualizados = dataSource[this.model].update(dadosAtualizados,
      {
        where: {
          id: id
        }
      }
    );
    if(listaDeRgristroAtualizados[0] === 0){
      return false;
    }else{
      return true;
    }
  }
  
  async getRegistroById(id){
    return dataSource[this.model].findByPk(id);
  }

  async createRegistro(dadosRegistro){
    const novoRegistro = dataSource[this.model].create(dadosRegistro);
    return novoRegistro;
  }

  async deleteRegistro(id){
    return dataSource[this.model].destroy({where: { id: id}});
  }
}


module.exports = Services;