var pautaModels = require('../models/pauta.models')
var pautaCrtl = {};

pautaCrtl.buscaPautaDataInicio = async (req,res) => {    
    let {dataInicio} = req.query;        
    let listaPauta = await pautaModels.find({
        data: {            
            $gte: dataInicio
        }
    }).sort({data:-1});    
    res.json(listaPauta);
}

pautaCrtl.buscaPautaDataFim = async (req,res) => {
    let {dataFim} = req.query;
    let listaPauta = await pautaModels.find({
        data:{
            $lte: dataFim
        }
    }).sort({data:-1});    
    res.json(listaPauta);
}

pautaCrtl.getPauta = async (req, res) =>{
   let {dataInicio, dataFim} = req.query;
   let listaPauta = await pautaModels.find({
       data:{
           $lte:dataFim,
           $gte: dataInicio
       }
   }).sort({data:-1});
   res.json(listaPauta);
}

pautaCrtl.inserirPauta = async (req, res) =>{
    var pauta = new pautaModels({
        local: req.body.local,
        data: req.body.data,
        assuntos: req.body.assuntos        
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
        local: req.body.local,
        data: req.body.data,        
        assuntos: req.body.assuntos
    };
    await pautaModels.findByIdAndUpdate(id, {$set: pauta}, {new: true});
    res.json({status: 'Pauta Atualizada com Sucesso'});
};

pautaCrtl.excluirPauta = async (req, res) =>{
    await pautaModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Pauta Excluida com Sucesso'});
}

module.exports = pautaCrtl;