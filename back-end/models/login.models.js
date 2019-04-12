var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
    login: { type: String, required: true },
    senha: { type: String, required: true }
});

module.exports = mongoose.model( 'Login', LoginSchema );