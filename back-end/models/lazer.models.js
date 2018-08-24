var mongoose = require('mongoose');
var { Schema } = mongoose;

var LazerSchema = new Schema ({
    data: {type: Date, required: true},
    local: {type: String, required: true},
    descricao: {type: String, required: true},
    
})

module.exports = mongoose.model('Lazer', LazerSchema);