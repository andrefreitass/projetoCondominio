var comunicadoModels = require('../models/comunicado.models')
var comunicadoCrtl = {};

comunicadoCrtl.getComunicado = async (req, res) =>{
    var listaComunicado = await comunicadoModels.find();
    console.log(listaComunicado);
    res.json(listaComunicado);
}

comunicadoCrtl.inserirComunicado = async (req, res) =>{
    var comunicado = new comunicadoModels({
        data: req.body.data,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        pauta: req.body.pauta
    });
    await comunicado.save();
    res.json({
        'status': 'Comunicado Criado com Sucesso'
    });
}

comunicadoCrtl.buscaComunicadoId = async (req, res) =>{
    var comunicado = await comunicadoModels.findById(req.params.id);
    res.json(comunicado);
}

comunicadoCrtl.atualizarComunicado = async (req, res) => {
    var { id } = req.params;
    var comunicado = {
        data: req.body.data,
        data: req.body.data,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        pauta: req.body.pauta
    };
    await comunicadoModels.findByIdAndUpdate(id, {$set: comunicado}, {new: true});
    res.json({status: 'Comunicado Atualizado com Sucesso'});
};

comunicadoCrtl.excluirComunicado = async (req, res) =>{
    console.log('teste');
    await comunicadoModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Comunicado Excluido com Sucesso'});
    }

module.exports = comunicadoCrtl;