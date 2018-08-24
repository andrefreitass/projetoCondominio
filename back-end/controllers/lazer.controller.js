var Lazer = require('../models/lazer.models')
var lazerCrtl = {};

lazerCrtl.getLazer = async (req, res) =>{
    
    let {dataInicio, dataFim} = req.query;
    var arraylazer = await Lazer.find({
        data: {
            $lte: dataFim,
            $gte: dataInicio
        }
    });
    res.json(arraylazer);
}

lazerCrtl.inserirLazer = async (req, res) =>{
    var lazer = new Lazer({
        local: req.body.local,
        descricao: req.body.descricao,
        data: req.body.data
    });
    await lazer.save();
    res.json({
        'status': 'Lazer Criado com Sucesso'
    });
}

lazerCrtl.buscaLazerId = async (req, res) =>{
    var lazer = await Lazer.findById(req.params.id);
    res.json(lazer);
}

lazerCrtl.atualizarLazer = async (req, res) => {
    var { id } = req.params;
    var lazer = {
        local: req.body.local,
        descricao: req.body.descricao,
        data: req.body.data
    };
    await Lazer.findByIdAndUpdate(id, {$set: lazer}, {new: true});
    res.json({status: 'Lazer Atualizado com Sucesso'});
};

lazerCrtl.excluirLazer = async (req, res) =>{
    await Lazer.findByIdAndRemove(req.params.id);
    res.json({status: 'Lazer Excluido com Sucesso'});
}

module.exports = lazerCrtl;