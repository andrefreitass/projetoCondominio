export class ComunicadoModels {
    constructor(_id = '', data = '',titulo = '' , descricao = '', pauta = '') {
        this._id = _id;
        this.data = data;
        this.titulo = titulo;
        this.descricao = descricao;
        this.pauta = pauta;        
    }

    _id: string;
    data: string;
    titulo: string;
    descricao: string;
    pauta: string
    
}
