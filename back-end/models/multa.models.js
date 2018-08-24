var mongoose = require('mongoose');

var MultaSchema = new mongoose.Schema({
    data: { type: Date, required: true},    
    motivo: { type: String, required: true},
    descricao: { type: String, required: true},
    valores: { type: String, required: true},
    
});

module.exports = mongoose.model('Multa', MultaSchema);