var mongoose = require('mongoose');

var EnqueteSchema = new mongoose.Schema({
    data:  { type: Date, required: true },
    titulo: { type: String, required: true },
    assuntos: { type: String, require: true },
});

module.exports = mongoose.model('Enquete', EnqueteSchema);