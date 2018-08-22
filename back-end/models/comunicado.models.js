var mongoose = require('mongoose');

var ComunicadoSchema = new mongoose.Schema({
    data: { type: Date, required: true},    
    titulo: { type: String, required: true},
    descricao: { type: String, required: true},
    pauta: { type: String, required: true},
    
});

module.exports = mongoose.model('Comunicado', ComunicadoSchema);