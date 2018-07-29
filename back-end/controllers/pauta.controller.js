var pautaModels = require('../models/pauta.models')
var pautaCrtl = {};

pautaCrtl.getPauta = async (req, res) =>{
    var listaPauta = await pautaModels.find();
    res.json(listaPauta);
}

pautaCrtl.inserirPauta = async (req, res) =>{
    var pauta = new pautaModels({
        data: req.body.data,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        pauta: req.body.pauta
    });
    await pauta.save();
    res.json({
        'status': 'Pauta Criada com Sucesso'
    });
}

pautaCrtl.buscaPautaId = async (req, res) =>{
    var pauta = await pautaModels.findById(req.params.id);
    res.json(pauta);
}

pautaCrtl.atualizarPauta = async (req, res) => {
    var { id } = req.params;
    var pauta = {
        data: req.body.data,
        data: req.body.data,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        pauta: req.body.pauta
    };
    await pautaModels.findByIdAndUpdate(id, {$set: pauta}, {new: true});
    res.json({status: 'Pauta Atualizada com Sucesso'});
};

pautaCrtl.excluirPauta = async (req, res) =>{
    await pautaModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Pauta Excluida com Sucesso'});
}

module.exports = pautaCrtl;