var Multa = require('../models/multa.models')
var multaCrtl = {};

multaCrtl.getMulta = async (req, res) =>{
    
    let {dataInicio, dataFim} = req.query;
    var arraymulta = await Multa.find({
        data: {
            $lte: dataFim,
            $gte: dataInicio
        }
    });
    res.json(arraymulta);
}

multaCrtl.inserirMulta = async (req, res) =>{
    var multa = new Multa({
        data: req.body.data,
        motivo: req.body.motivo,
        descricao: req.body.descricao,
        valores: req.body.valores
        
    });
    await multa.save();
    res.json({
        'status': 'Multa Criado com Sucesso'
    });
}

multaCrtl.buscaMultaId = async (req, res) =>{
    var multa = await Multa.findById(req.params.id);
    res.json(multa);
}

multaCrtl.atualizarMulta = async (req, res) => {
    var { id } = req.params;
    var multa = {
        data: req.body.data,
        motivo: req.body.motivo,
        descricao: req.body.descricao,
        valores: req.body.valores
    };
    await Multa.findByIdAndUpdate(id, {$set: multa}, {new: true});
    res.json({status: 'Multa Atualizado com Sucesso'});
};

multaCrtl.excluirMulta = async (req, res) =>{
    await Multa.findByIdAndRemove(req.params.id);
    res.json({status: 'Multa Excluido com Sucesso'});
}

module.exports = multaCrtl;