export class PautaModels {
    constructor(_id = '', local = '', data = null , assuntos = '') {
        this._id = _id;
        this.local = local;
        this.data = data;       
        this.assuntos = assuntos;        
    }

    _id: string;
    local: string;
    data: Date;
    assuntos: string    
}
