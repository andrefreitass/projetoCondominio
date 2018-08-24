var advertenciaModels = require('../models/advertencia.models')
var advertenciaCrtl = {};

advertenciaCrtl.getAdvertencia = async (req, res) =>{

    let {dataInicio, dataFim} = req.query;
    let listaAdvertencia = await advertenciaModels.find({
        data: {
            $lte: dataFim,
            $gte: dataInicio
        }
    });

    console.log(listaAdvertencia);
    res.json(listaAdvertencia);
}

advertenciaCrtl.inserirAdvertencia = async (req, res) =>{
    var advertencia = new advertenciaModels({
        data: req.body.data,
        motivo: req.body.motivo,
        descricao: req.body.descricao,
        anexo: req.body.anexo
    });
    await advertencia.save();
    res.json({
        'status': 'Advertencia Criado com Sucesso'
    });
}

advertenciaCrtl.buscaAdvertenciaId = async (req, res) =>{
    var advertencia = await advertenciaModels.findById(req.params.id);
    res.json(advertencia);
}

advertenciaCrtl.atualizarAdvertencia = async (req, res) => {
    var { id } = req.params;
    var advertencia = {        
        data: req.body.data,
        motivo: req.body.motivo,
        descricao: req.body.descricao,
        anexo: req.body.anexo
    };
    await advertenciaModels.findByIdAndUpdate(id, {$set: advertencia}, {new: true});
    res.json({status: 'Advertencia Atualizado com Sucesso'});
};

advertenciaCrtl.excluirAdvertencia = async (req, res) =>{
    console.log('teste');
    await advertenciaModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Advertencia Excluido com Sucesso'});
    }

module.exports = advertenciaCrtl;