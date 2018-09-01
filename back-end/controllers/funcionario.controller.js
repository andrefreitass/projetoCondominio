var funcionarioModels = require('../models/funcionario.models')
var funcionarioCrtl = {};

funcionarioCrtl.getFuncionario = async (req, res) =>{

    let {pesquisaCpf} = req.query;
    let listaFuncionario = await funcionarioModels.find({
        cpf: {
            $lte: pesquisaCpf,
        
        }
    });

    console.log(listaFuncionario);
    res.json(listaFuncionario);
}




funcionarioCrtl.inserirFuncionario = async (req, res) =>{
    var funcionario = new funcionarioModels({        
        data: req.body.data,
        nome: req.body.nome,
        funcao: req.body.funcao,
        cpf: req.body.cpf,
        rg: req.body.rg,
        rgEmissor: req.body.rgEmissor,
        nacionalidade: req.body.nacionalidade,
        nomePai: req.body.nomePai,
        nomeMae: req.body.nomeMae,
        dataNascimento: req.body.dataNascimento,

        enderecoCep: req.body.enderecoCep,
        enderecoNumero: req.body.enderecoNumero,
        enderecoCompleto: req.body.enderecoCompleto,
        enderecoRua: req.body.enderecoRua,
        enderecoBairro: req.body.enderecoBairro,
        enderecoCidade: req.body.enderecoCidade,
        enderecoEstado: req.body.enderecoEstado,

    });
    await funcionario.save();
    res.json({
        'status': 'Funcionario Criado com Sucesso'
    });
}

funcionarioCrtl.buscaFuncionarioId = async (req, res) =>{
    var funcionario = await funcionarioModels.findById(req.params.id);
    res.json(funcionario);
}

funcionarioCrtl.atualizarFuncionario = async (req, res) => {
    var { id } = req.params;
    var funcionario = {        
        data: req.body.data,
        nome: req.body.nome,
        funcao: req.body.funcao,
        cpf: req.body.cpf,
        rg: req.body.rg,
        rgEmissor: req.body.rgEmissor,
        nacionalidade: req.body.nacionalidade,
        nomePai: req.body.nomePai,
        nomeMae: req.body.nomeMae,
        dataNascimento: req.body.dataNascimento,

        enderecoCep: req.body.enderecoCep,
        enderecoNumero: req.body.enderecoNumero,
        enderecoCompleto: req.body.enderecoCompleto,
        enderecoRua: req.body.enderecoRua,
        enderecoBairro: req.body.enderecoBairro,
        enderecoCidade: req.body.enderecoCidade,
        enderecoEstado: req.body.enderecoEstado
    };
    await funcionarioModels.findByIdAndUpdate(id, {$set: funcionario}, {new: true});
    res.json({status: 'Funcionario Atualizado com Sucesso'});
};

funcionarioCrtl.excluirFuncionario = async (req, res) =>{
    console.log('teste');
    await funcionarioModels.findByIdAndRemove(req.params.id);
    res.json({status: 'Funcionario Excluido com Sucesso'});
    }

module.exports = funcionarioCrtl;