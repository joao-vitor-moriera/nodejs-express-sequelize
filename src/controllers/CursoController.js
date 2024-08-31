const {Op} = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res){
    const {data_inicial, data_final} = req.query;
    const where ={};

    //se existirem os param, cria uma propriedade {}
    data_inicial || data_final ? where.data_inicio = {} : null;

    //se existir data inicial, adicionar a propriedade gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial: null;

    //se existir data final, adicionar a propriedade lte com o valor
    data_final? where.data_inicio[Op.lte] = data_final: null;

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }

  }

}



module.exports = CursoController;
