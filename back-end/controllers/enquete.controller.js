var enqueteModels = require('../models/enquete.models')
var enqueteCrtl = {};

enqueteCrtl.getEnquete = async (req, res) =>{

    let {dataInicio, dataFim} = req.query;
    let listaEnquete = await enqueteModels.find({
        data: {
            $lte: dataFim,
            $gte: dataInicio
        }
    });    
    res.json(listaEnquete);
}

enqueteCrtl.inserirEnquete = async (req, res) =>{
    var enquete = new enqueteModels({
        data: req.body.data,
        titulo: req.body.titulo,        
        assuntos: req.body.assuntos
    });
    await enquete.save();
    res.json({
        'status': 'Enquete Criado com Sucesso'
    });
}

enqueteCrtl.buscaEnqueteId = async (req, res) =>{
    var enquete = await enqueteModels.findById(req.params.id);
    res.json(enquete);
}

enqueteCrtl.atualizarEnquete = async (req, res) => {
    var { id } = req.params;
    var enquete = {
        data: req.body.data,        
        titulo: req.body.titulo,        
        assuntos: req.body.assuntos
    };
    await enqueteModels.findByIdAndUpdate(id, {$set: enquete}, {new: true});
    res.json({status: 'Enquete Atualizado com Sucesso'});
};

enqueteCrtl.excluirEnquete = async (req, res) =>{    
    await enqueteModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Enquete Excluido com Sucesso'});
    }
module.exports = enqueteCrtl;