export class ComunicadoModels {
    constructor(_id = '', data = null ,titulo = '' , descricao = '', pauta = '') {
        this._id = _id;
        this.data = data;
        this.titulo = titulo;
        this.descricao = descricao;
        this.pauta = pauta;        
    }

    _id: string;
    data: Date;
    titulo: string;
    descricao: string;
    pauta: string
    
}
