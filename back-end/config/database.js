var mongoose = require('mongoose');

//var URI = 'mongodb://localhost/condominio';

mongoose.connect('mongodb://localhost/condominio')
    .then(db => console.log('Banco de dados conectado com sucesso!!'))
    .catch(err => console.error(err));

module.exports = mongoose;