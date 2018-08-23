export class EnqueteModels {
    constructor(_id = '', data = null ,titulo = '' , assuntos = '') {
        this._id = _id;
        this.data = data;
        this.titulo = titulo;
        this.assuntos = assuntos;
        
    }

    _id: string;
    data: Date;
    titulo: string;    
    assuntos: string    
}
