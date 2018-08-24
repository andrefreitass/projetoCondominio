export class MultaModels {
    constructor(_id = '', data = null ,motivo = '' , descricao = '', valores = '') {
        this._id = _id;
        this.data = data;
        this.motivo = motivo;
        this.descricao = descricao;
        this.valores = valores;        
    }

    _id: string;
    data: Date;
    motivo: string;
    descricao: string;
    valores: string
    
}
