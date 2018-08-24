export class AdvertenciaModels {
    constructor(_id = '', data = null ,motivo = '' , descricao = '', anexo = '') {
        this._id = _id;
        this.data = data;
        this.motivo = motivo;
        this.descricao = descricao;
        this.anexo = anexo;        
    }

    _id: string;
    data: Date;
    motivo: string;
    descricao: string;
    anexo: string
    
}
