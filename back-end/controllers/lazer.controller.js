var Lazer = require('../models/lazer')
var lazerCrtl = {};

lazerCrtl.getArraylazer = async (req, res) =>{
    var arraylazer = await Lazer.find();
    res.json(arraylazer);
}

lazerCrtl.createLazer = async (req, res) =>{
    var lazer = new Lazer({
        local: req.body.local,
        descricao: req.body.descricao,
        data: req.body.data
    });
    await lazer.save();
    res.json({
        'status': 'lazer salvo'
    });
}

lazerCrtl.getLazer = async (req, res) =>{
    var lazer = await Lazer.findById(req.params.id);
    res.json(lazer);
}

lazerCrtl.editLazer = async (req, res) => {
    var { id } = req.params;
    var lazer = {
        local: req.body.local,
        descricao: req.body.descricao,
        data: req.body.data
    };
    await Lazer.findByIdAndUpdate(id, {$set: lazer}, {new: true});
    res.json({status: 'Lazer editado'});
};

lazerCrtl.deleteLazer = async (req, res) =>{
    await Lazer.findByIdAndRemove(req.params.id);
    res.json({status: 'Lazer excluido'});
}

module.exports = lazerCrtl;