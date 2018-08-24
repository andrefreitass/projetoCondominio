var mongoose = require('mongoose');

var AdvertenciaSchema = new mongoose.Schema({
    data: { type: Date, required: true},    
    motivo: { type: String, required: true},
    descricao: { type: String, required: true},
    anexo: { type: String, required: true},

    
});

module.exports = mongoose.model('Advertencia', AdvertenciaSchema);