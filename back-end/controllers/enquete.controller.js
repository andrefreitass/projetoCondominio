var Enquete = require('../models/enquete.models')
var enqueteCrtl = {};

enqueteCrtl.getArrayEnquete = async (req, res) =>{
    var arrayEnquete = await Enquete.find();
    res.json(arrayEnquete);
}

enqueteCrtl.createEnquete = async (req, res) =>{
    var enquete = new Enquete({
        local: req.body.local,
        descricao: req.body.descricao        
    });
    await enquete.save();
    res.json({
        'status': 'lazer salvo'
    });
}

enqueteCrtl.getEnquete = async (req, res) =>{
    var enquete = await Enquete.findById(req.params.id);
    res.json(enquete);
}

enqueteCrtl.editEnquete = async (req, res) => {
    var { id } = req.params;
    var enquete = {
        local: req.body.local,
        descricao: req.body.descricao
    };
    await Enquete.findByIdAndUpdate(id, {$set: enquete}, {new: true});
    res.json({status: 'Lazer editado'});
};

enqueteCrtl.deleteEnquete = async (req, res) =>{
    await Enquete.findByIdAndRemove(req.params.id);
    res.json({status: 'Lazer excluido'});
}

module.exports = enqueteCrtl;