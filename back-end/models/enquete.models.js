var mongoose = require('mongoose');

var EnqueteSchema = new mongoose.Schema({
    local:  { type: String, required: true },
    descricao: { type: String, required: true },
    
});

module.exports = mongoose.model('Enquete', EnqueteSchema);