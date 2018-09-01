export class FuncionarioModels {
    constructor(_id = '', data = null ,nome = '' , funcao = '', cpf = '', rg = '', rgEmissor = '', 
    nacionalidade = '', nomePai = '', nomeMae = '', dataNascimento = '', enderecoCep = '', 
    enderecoNumero = '', enderecoComplemento = '', enderecoRua = '', enderecoBairro = '', enderecoCidade = '',
    enderecoEstado = '') {
        this._id = _id;
        this.data = data;
        this.nome = nome;
        this.funcao = funcao;
        this.rg = rg;  
        this.rgEmissor = rgEmissor;
        this.nacionalidade = nacionalidade;
        this.nomePai = nomePai;
        this.nomeMae = nomeMae;
        this.dataNascimento = dataNascimento;
        
        
        this.enderecoCep = enderecoCep;
        this.enderecoNumero = enderecoNumero;
        this.enderecoComplemento = enderecoComplemento;
        this.enderecoRua = enderecoRua;
        this.enderecoBairro = enderecoBairro;
        this.enderecoCidade = enderecoCidade;
        this.endecoEstado = enderecoEstado;      
    }

    _id: string;
    data: Date;
    nome: string;
    funcao: string;
    cpf: string;
    rg: string;
    rgEmissor: string;
    nacionalidade: string;
    nomePai: string;
    nomeMae: string;
    dataNascimento: string;
    enderecoCep: string;
    enderecoNumero: string;
    enderecoComplemento: string;
    enderecoRua: string;
    enderecoBairro: string;
    enderecoCidade: string;
    endecoEstado: string;
    
}
