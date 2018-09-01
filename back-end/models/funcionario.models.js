var mongoose = require('mongoose');

var FuncionarioSchema = new mongoose.Schema({
    data: { type: Date, required: true},
    nome: { type: String, required: true},
    funcao: { type: String, required: true},
    cpf: { type: String, required: true},
    rg:  { type: String, required: false },
    rgEmissor:  { type: String, required: false },
    nacionalidade:  { type: String, required: false },
    nomePai:  { type: String, required: false },
    nomeMae:  { type: String, required: false },
    dataNascimento:  { type: Date, required: false },

    enderecoCep:  { type: String, required: false }, 
    enderecoNumero:  { type: String, required: false }, 
    enderecoComplemento:  { type: String, required: false },
    enderecoRua:  { type: String, required: false }, 
    enderecoBairro:  { type: String, required: false },
    enderecoCidade:  { type: String, required: false },
    enderecoEstado:  { type: String, required: false }
    
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);