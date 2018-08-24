export class LazerModels {
    constructor(_id = '', data = null, local = '', descricao = '' ) {
        this._id = _id;
        this.data = data;
        this.local = local;
        this.descricao = descricao;
        
    }

    _id: string;
    data: Date;
    local: string;
    descricao: string;
   
}
